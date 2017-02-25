import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';

const coloursModule = require('!raw-loader!tachyons/src/_colors.css');

const root = postcss.parse(coloursModule);

const getColours = R.prop(':root');

export const colours = R.compose(
  renameBy(R.replace('-', '')),
  getColours,
  postcssJs.objectify,
)(root);

console.log(colours);
