import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  toKebabCase,
  getColours,
  getClasses,
  getAtMediaClasses,
  renameKeys,
  renameBy,
  toTitleCase,
} from './utils';

/**
 * Colours
 */
const coloursModule = require('!raw-loader!tachyons/src/_colors.css');

const coloursRoot = postcss.parse(coloursModule);

const groupByAlpha = R.groupBy(
  R.compose(
    R.test(/(rgba.+|transparent)/),
    R.last,
  ),
);

export const colours = R.compose(
  R.map(R.fromPairs),
  renameKeys({
    false: 'solid',
    true: 'alpha',
  }),
  groupByAlpha,
  R.toPairs,
  renameBy(toTitleCase),
  getColours,
  postcssJs.objectify,
)(coloursRoot);


/**
 * All Styles
 */
const tachyonsCss = require('!raw-loader!tachyons');

const cssRoot = postcss.parse(tachyonsCss);

export const cssObj = R.compose(
  R.map(renameKeys({ cssFloat: 'float' })),
  R.converge(R.merge, [getClasses, getAtMediaClasses]),
  postcssJs.objectify,
)(cssRoot);


function splitRules(props, className) {
  return R.map(R.pair(className), props);
}

export const groupedClasses = R.compose(
  R.map(R.map(R.head)),
  R.groupBy(R.tail),
  R.unnest,
  R.values,
  R.mapObjIndexed(splitRules),
  R.map(R.keys),
)(cssObj);


const getNameVariations = R.juxt([R.toLower, toKebabCase]);

export const propNamesList = R.compose(
  R.mergeAll,
  R.map(
    R.compose(
      R.fromPairs,
      R.converge(R.xprod, [getNameVariations, R.of]),
    ),
  ),
  R.keys,
)(groupedClasses);
