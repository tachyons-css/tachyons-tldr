import R from 'ramda';
import {
  toKebabCase,
} from '../utils';
import cssObj from './styles.json';


/**
 * All Styles
 */
export { cssObj };

function splitRules(props, className) {
  return R.map(R.pair(className), props);
}

export const classNames = R.compose(
  R.identity,
)(cssObj);


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
