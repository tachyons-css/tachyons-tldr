import { dependencies } from '../../package.json';
import { cssObj, groupedClasses, propNamesList, classNames } from './styles';
import colours from './colours.json';
import scales from './scales.json';

const version = dependencies.tachyons.replace('^', 'v');

export {
  classNames,
  cssObj,
  groupedClasses,
  propNamesList,
  colours,
  scales,
  version,
};
