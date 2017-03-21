import { dependencies } from '../../package.json';
import { cssObj, groupedClasses, propNamesList, classNames } from './styles';
import { colours } from './colours';
import { scales } from './scales';

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
