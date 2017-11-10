/* eslint-disable */
import fs from 'fs';
import postcssJs from 'postcss-js';
import postcss from 'postcss';
import hello from 'hello-color';
import R from 'ramda';
import { root, renameKeys, renameKeysBy, toTitleCase } from '../../utils';

/**
 * Colours
 */
const coloursModule = fs.readFileSync('node_modules/tachyons/src/_colors.css');

const coloursRoot = postcss.parse(coloursModule);

const groupByAlpha = R.groupBy(
  R.compose(R.test(/(rgba.+|transparent)/), R.last),
);

const addNegatives = R.map(colour => ({
  value: colour,
  negative: hello(colour, { contrast: 4.5, lightness: 1 / 8 }).color,
}));

console.info('    🎨  Parsing Tachyons Colours module');

export const colours = R.compose(
  R.over(R.lensProp('solid'), addNegatives),
  R.map(R.fromPairs),
  renameKeys({
    false: 'solid',
    true: 'alpha',
  }),
  groupByAlpha,
  R.toPairs,
  renameKeysBy(toTitleCase),
  root,
  postcssJs.objectify,
)(coloursRoot);

fs.writeFile(
  './src/api/colours.json',
  JSON.stringify(colours, null, 2),
  err => {
    if (err) {
      return console.error(err);
    }

    console.info('    🖨️  Colours file was saved');
  },
);
