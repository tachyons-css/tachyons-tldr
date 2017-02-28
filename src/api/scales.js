import postcssJs from 'postcss-js';
import postcss from 'postcss';
import R from 'ramda';
import {
  getRoot,
  nonMediaValuesBy,
} from './utils';

/* eslint-disable */
const valuesFromModule = (valueGetter, moduleName) => {
  const module = require(`!raw-loader!tachyons/src/_${moduleName}.css`);
  const root = postcss.parse(module);
  return R.compose(valueGetter, postcssJs.objectify)(root);
};
/* eslint-enable */


const scaleParsers = {
  spacing: R.compose(R.values, getRoot),

  'type-scale': nonMediaValuesBy(R.prop('fontSize')),

  'font-weight': nonMediaValuesBy(R.prop('fontWeight')),

  'border-radius': nonMediaValuesBy(R.ifElse(R.has('borderRadius'),
      R.prop('borderRadius'),
      R.identity,
    )),
};

const scales = R.mapObjIndexed(valuesFromModule, scaleParsers);
console.log(scales);

export default scales;
