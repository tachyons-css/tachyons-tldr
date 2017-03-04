import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  toKebabCase,
  selectors,
  atMediaClasses,
  renameKeys,
} from '../utils';


/**
 * All Styles
 */
const tachyonsCss = require('!raw-loader!tachyons');

const cssRoot = postcss.parse(tachyonsCss);

export const cssObj = R.compose(
  R.map(renameKeys({ cssFloat: 'float' })),
  R.converge(R.merge, [selectors, atMediaClasses]),
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
