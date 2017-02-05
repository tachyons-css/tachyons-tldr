import R, { __ } from 'ramda';
import { propNamesList } from '../../api/styles';

export const findGroup = R.compose(
  R.prop(__, propNamesList),
  R.toLower
);

const mediaQueryRegex = /(.+)-(ns|m|l)$/;

const groupByClassName = R.groupBy(
  R.ifElse(R.test(mediaQueryRegex),
    R.pipe(R.match(mediaQueryRegex), R.nth(1)),
    R.identity,
  ),
);

export const groupClasses = R.compose(
  R.map(R.tail),
  groupByClassName,
);
