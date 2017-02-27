import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  getRoot,
  filterWithKeys,
  isMediaRule,
} from './utils';

/**
 * Spacing
 */
const spacingModule = require('!raw-loader!tachyons/src/_spacing.css');

const spacingRoot = postcss.parse(spacingModule);

export const spacingScale = R.compose(
  R.values,
  getRoot,
  postcssJs.objectify,
)(spacingRoot);


/**
 * Type Scale
 */
const typeScaleModule = require('!raw-loader!tachyons/src/_type-scale.css');

const typeScaleRoot = postcss.parse(typeScaleModule);

export const typeScale = R.compose(
  R.map(R.prop('fontSize')),
  filterWithKeys(R.complement(isMediaRule)),
  postcssJs.objectify,
)(typeScaleRoot);
