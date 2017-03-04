import { dependencies } from '../../package.json';

export { cssObj, groupedClasses, propNamesList } from './styles';
export { colours } from './colours';
export { scales } from './scales';
export const version = dependencies.tachyons.replace('^', 'v');
