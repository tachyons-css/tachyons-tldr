/* eslint-disable */
import fs from 'fs';
import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  allSelectorsToClassNames,
  nonMediaValuesBy,
  root,
  renameKeys,
} from '../../utils';

const valuesFromModule = (valueGetter, moduleName) => {
  const module = fs.readFileSync(
    `node_modules/tachyons/src/_${moduleName}.css`,
  );

  const root = postcss.parse(module);
  return R.compose(valueGetter, postcssJs.objectify)(root);
};

const scaleParsers = {
  spacing: R.compose(R.values, root),

  'type-scale': nonMediaValuesBy(R.prop('fontSize')),

  'font-weight': R.compose(
    R.omit(['.b', '.normal']),
    nonMediaValuesBy(R.prop('fontWeight')),
  ),

  'border-radius': nonMediaValuesBy(
    R.ifElse(R.has('borderRadius'), R.prop('borderRadius'), R.identity),
  ),

  'border-widths': nonMediaValuesBy(
    R.ifElse(R.has('borderWidth'), R.prop('borderWidth'), R.identity),
  ),

  heights: R.compose(
    R.omit(['.h-auto', '.h-inherit', '.min-h-100', '.min-vh-100']),
    nonMediaValuesBy(R.prop('height')),
  ),

  widths: R.compose(R.omit(['.w-auto']), nonMediaValuesBy(R.prop('width'))),

  'max-widths': R.compose(
    R.omit(['.mw-none']),
    nonMediaValuesBy(R.prop('maxWidth')),
  ),

  opacity: nonMediaValuesBy(R.prop('opacity')),

  'box-shadow': nonMediaValuesBy(R.prop('boxShadow')),
};

console.info('    📏  Parsing all scale based modules');

const scales = R.compose(
  R.map(allSelectorsToClassNames),
  renameKeys({
    'type-scale': 'type',
    'font-weight': 'fontWeight',
    'border-radius': 'borderRadius',
    'border-widths': 'borderWidths',
    'max-widths': 'maxWidths',
    'box-shadow': 'shadow',
  }),
  R.mapObjIndexed,
)(valuesFromModule, scaleParsers);

fs.writeFile('./src/api/scales.json', JSON.stringify(scales, null, 2), err => {
  if (err) {
    return console.error(err);
  }

  console.info('    🖨️  Scales file was saved');
});
