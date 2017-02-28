import R from 'ramda';

/* eslint-disable no-param-reassign */
export const renameKeys = R.curry((keysMap, obj) => (
  R.reduce((acc, key) => {
    acc[keysMap[key] || key] = obj[key];
    return acc;
  }, {}, R.keys(obj))
));
/* eslint-enable no-param-reassign */

export const renameBy = fn => obj =>
  R.compose(
    R.fromPairs,
    R.map(R.adjust(fn, 0)),
    R.toPairs,
  )(obj);

export const filterWithKeys = pred => obj => R.compose(
    R.fromPairs,
    R.filter(R.apply(pred)),
    R.toPairs,
  )(obj);


export const toTitleCase = s => s.replace(
  /\.?([0-9]+|[A-Z])/g,
  (x, y) => ` ${y}`,
).replace(/^-/, '').trim();

export const toKebabCase = s => s.replace(
  /\.?([A-Z])/g,
  (x, y) => `-${y.toLowerCase()}`,
).replace(/^-/, '');


export const isMediaRule = R.test(/^@media.+/);

export const getRoot = R.prop(':root');

export const getClasses = R.pickBy(R.compose(R.test(/^\./), R.nthArg(1)));

export const getAtMediaRules = R.pickBy(R.compose(R.test(/^@/), R.nthArg(1)));

export const getAtMediaClasses = R.compose(
  R.mergeAll,
  R.values,
  getAtMediaRules,
);

export const nonMediaValuesBy = R.curry((getProp, root) => R.compose(
  R.map(getProp),
  filterWithKeys(R.complement(isMediaRule)),
)(root));
