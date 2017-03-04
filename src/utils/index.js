import R, { __ } from 'ramda';
import { propNamesList, cssObj } from '../api';

/**
 * Key name manipulators
 */
export const renameKeys = R.curry((keysMap, obj) => (
  R.reduce((acc, key) => {
    acc[keysMap[key] || key] = obj[key];
    return acc;
  }, {}, R.keys(obj))
));

export const renameKeysBy = fn => obj =>
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


/**
 * Case convertors
 */
export const toTitleCase = s => s.replace(
  /\.?([0-9]+|[A-Z])/g,
  (x, y) => ` ${y}`,
).replace(/^-/, '').trim();

export const toKebabCase = s => s.replace(
  /\.?([A-Z])/g,
  (x, y) => `-${y.toLowerCase()}`,
).replace(/^-/, '');

export const toCamelCase = s => s.replace(
  /\W+(.)/g,
  (x, y) => `-${y.toUpperCase()}`,
).replace(/-/g, '');

export const selectorToClassName = R.replace(/(\n|\.)/g, '');
export const allSelectorsToClassNames = renameKeysBy(selectorToClassName);

/**
 * Comparators
 */
export const isMediaRule = R.test(/^@media.+/);
export const testFirst = regex => R.compose(R.test(regex), R.head);
export const isPositional = testFirst(/(top|left|right|bottom)/);
const mediaQueryRegex = /(.+)-(ns|m|l)$/;

// Getters
export const root = R.prop(':root');

export const selectors = R.pickBy(R.compose(R.test(/^\./), R.nthArg(1)));

export const atMediaRules = R.pickBy(R.compose(R.test(/^@/), R.nthArg(1)));

export const atMediaClasses = R.compose(
  R.mergeAll,
  R.values,
  atMediaRules,
);

export const nonMediaValuesBy = R.curry((getProp, root) => R.compose(
  R.map(getProp),
  filterWithKeys(R.complement(isMediaRule)),
)(root));

export const findByPartialMatch = query => R.compose(
  R.find(
    R.pipe(R.toLower, R.invoker(1, 'includes')(query)),
  ),
  R.values,
)(propNamesList);

export const findGroup = R.converge(R.or, [
  R.compose(
    R.prop(__, propNamesList),
    R.toLower,
  ),
  findByPartialMatch,
]);

const groupByClassName = R.groupBy(
  R.ifElse(R.test(mediaQueryRegex),
    R.pipe(R.match(mediaQueryRegex), R.nth(1)),
    R.identity,
  ),
);

export const groupClasses = R.compose(
  R.values,
  R.mapObjIndexed((mqNames, className) => ({
    name: className,
    value: cssObj[className],
    mqNames,
  })),
  R.map(R.tail),
  groupByClassName,
);
