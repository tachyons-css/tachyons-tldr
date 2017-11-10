/**
 * Parse tachyons into data that drives the app
 * This script is executed at build time
 */
/* eslint-disable */
import fs from 'fs';
import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';

import { selectors, atMediaClasses, renameKeys } from '../../utils';

/**
 * All Styles
 */
const tachyonsCss = fs.readFileSync('node_modules/tachyons/css/tachyons.css');

const cssRoot = postcss.parse(tachyonsCss);

console.info('\n    🤖  Parsing Tachyons');

const cssObj = R.compose(
  R.map(renameKeys({ cssFloat: 'float' })),
  R.converge(R.merge, [selectors, atMediaClasses]),
  postcssJs.objectify,
)(cssRoot);

fs.writeFile('./src/api/styles.json', JSON.stringify(cssObj, null, 2), err => {
  if (err) {
    return console.error(err);
  }

  console.info('    🙌🏽  CSS Object file was saved \n');
});
