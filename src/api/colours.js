import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  getRoot,
  renameKeys,
  renameBy,
  toTitleCase,
} from './utils';

/**
 * Colours
 */
const coloursModule = require('!raw-loader!tachyons/src/_colors.css');

const coloursRoot = postcss.parse(coloursModule);

const groupByAlpha = R.groupBy(
  R.compose(
    R.test(/(rgba.+|transparent)/),
    R.last,
  ),
);

export const colours = R.compose(
  R.map(R.fromPairs),
  renameKeys({
    false: 'solid',
    true: 'alpha',
  }),
  groupByAlpha,
  R.toPairs,
  renameBy(toTitleCase),
  getRoot,
  postcssJs.objectify,
)(coloursRoot);
