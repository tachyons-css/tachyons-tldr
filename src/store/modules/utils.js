import R, { __ } from 'ramda';
import { propNamesList, cssObj } from '../../api/styles';

const mediaQueryRegex = /(.+)-(ns|m|l)$/;

export const findByPartialMatch = query => R.compose(
  R.find(
    R.pipe(R.toLower, R.invoker(1, 'includes')(query))
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
