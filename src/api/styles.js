import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';

const css = require('!raw-loader!tachyons');

const getClasses = R.pickBy(R.compose(R.test(/^\./), R.nthArg(1)));
const getAtMediaRules = R.pickBy(R.compose(R.test(/^@/), R.nthArg(1)));
const getAtMediaClasses = R.compose(
  R.mergeAll,
  R.values,
  getAtMediaRules,
);


const root = postcss.parse(css);

export const cssObj = R.compose(
  R.converge(R.merge, [getClasses, getAtMediaClasses]),
  postcssJs.objectify,
)(root);

const toKebabCase = s => s.replace(
  /\.?([A-Z])/g,
  (x, y) => `-${y.toLowerCase()}`,
).replace(/^-/, '');

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
