import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  allSelectorsToClassNames,
  nonMediaValuesBy,
  root,
  renameKeys,
} from '../utils';

/* eslint-disable */
const valuesFromModule = (valueGetter, moduleName) => {
  const module = require(`!raw-loader!tachyons/src/_${moduleName}.css`);
  const root = postcss.parse(module);
  return R.compose(valueGetter, postcssJs.objectify)(root);
};
/* eslint-enable */


const scaleParsers = {
  spacing: R.compose(R.values, root),

  'type-scale': nonMediaValuesBy(R.prop('fontSize')),

  'font-weight': R.compose(
    R.omit(['.b', '.normal']),
    nonMediaValuesBy(R.prop('fontWeight')),
  ),

  'border-radius': nonMediaValuesBy(R.ifElse(R.has('borderRadius'),
    R.prop('borderRadius'),
    R.identity,
  )),

  'border-widths': nonMediaValuesBy(R.ifElse(R.has('borderWidth'),
    R.prop('borderWidth'),
    R.identity,
  )),

  heights: R.compose(
    R.omit(['.h-auto', '.h-inherit', '.min-h-100', '.min-vh-100']),
    nonMediaValuesBy(R.prop('height'))
  ),

  widths: R.compose(
    R.omit(['.w-auto']),
    nonMediaValuesBy(R.prop('width')),
  ),

  'max-widths': R.compose(
    R.omit(['.mw-none']),
    nonMediaValuesBy(R.prop('maxWidth')),
  ),

  opacity: nonMediaValuesBy(R.prop('opacity')),

  'box-shadow': nonMediaValuesBy(R.prop('boxShadow')),
};

export const scales = R.compose(
  R.map(allSelectorsToClassNames),
  renameKeys({
    'type-scale': 'type',
    'font-weight': 'fontWeight',
    'border-radius': 'borderRadius',
    'border-widths': 'borderWidths',
    'max-widths': 'maxWidth',
    'box-shadow': 'shadow',
  }),
  R.mapObjIndexed,
)(valuesFromModule, scaleParsers);
