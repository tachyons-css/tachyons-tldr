import R from 'ramda';
import hello from 'hello-color';
import { TACHYONS } from '../mutation-types';
import {
  groupedClasses,
  colours,
  scales,
  version,
} from '../../api';
import * as utils from '../../utils';

const classNamesLens = R.lensPath([1, 'classNames']);
const brClassNames = custom => `h3 bg-light-gray ba b--moon-gray ${custom}`;
const bwClassNames = custom => `h3 br b--moon-gray ${custom}`;

/**
 * ✅  spacing
 * ✅ type-scale
 * ✅ font-weight
 * ✅ border-radius
 * ✅ border-widths
 * ✅ heights
 * ✅ widths
 * ☐ max-widths
 * ✅ opacity
 * ✅ shadow
 */


/**
 * initial state
 */
const tachyonsState = {
  version,
  classGroups: {},
  colours: {},
  scales: {},
};


/**
 * Getters
 */
const getters = {
  solidColours: R.compose(
    R.map(colour => ({
      value: colour,
      negative: hello(colour).color,
    })),
    R.path(['colours', 'solid']),
  ),

  spacingScale: R.compose(
    R.map(R.replace(/\./, '0.')),
    R.path(['scales', 'spacing']),
  ),

  typeScale: R.compose(
    utils.renameKeysBy(R.compose(
      R.head,
      R.split(','),
    )),
    R.path(['scales', 'type']),
  ),

  fontWeight: R.compose(
    R.fromPairs,
    R.sort((a, b) => b[1] - a[1]),
    R.toPairs,
    R.path(['scales', 'fontWeight']),
  ),

  borderRadius: R.compose(
    R.map(R.fromPairs),
    R.groupBy(R.cond([
      [utils.classNameIsPositional, R.always('positional')],
      [R.T, R.always('scale')],
    ])),
    R.map(R.cond([
      [utils.testFirst(/pill/), R.set(classNamesLens, brClassNames('w4'))],
      [
        utils.classNameIsPositional,
        R.set(classNamesLens, brClassNames('w4 br3')),
      ],
      [R.T, R.set(classNamesLens, brClassNames('w3'))],
    ])),
    R.toPairs,
    R.map(R.objOf('value')),
    R.path(['scales', 'borderRadius']),
  ),

  borderWidths: R.compose(
    R.map(R.fromPairs),
    R.groupBy(R.cond([
      [utils.testFirst(/(b|l|t|r)-/), R.always('resets')],
      [R.T, R.always('scale')],
    ])),
    R.map(R.cond([
      [
        utils.testFirst(/(b|l|t|r)-/),
        R.set(classNamesLens, bwClassNames('w4 bw2 ba')),
      ],
      [R.T, R.set(classNamesLens, bwClassNames('w3'))],
    ])),
    R.toPairs,
    R.map(R.objOf('value')),
    R.path(['scales', 'borderWidths']),
  ),

  widths: R.compose(
    R.map(R.fromPairs),
    R.groupBy(R.cond([
      [utils.testFirst(/third/), R.always('third')],
      [utils.testFirst(/^w-\d+/), R.always('percent')],
      [utils.testFirst(/^w\d+/g), R.always('scale')],
    ])),
    R.toPairs,
    R.path(['scales', 'widths']),
  ),

  heights: R.compose(
    R.map(R.fromPairs),
    R.groupBy(R.cond([
      [utils.testFirst(/^h\d+/), R.always('scale')],
      [utils.testFirst(/^h-\d+/), R.always('percent')],
      [utils.testFirst(/^vh-\d+/), R.always('vh')],
    ])),
    R.map(R.set(classNamesLens, 'w3 bg-light-gray bb b--persian-green bw1')),
    R.toPairs,
    R.map(R.objOf('value')),
    R.path(['scales', 'heights']),
  ),

  opacityScale: R.compose(
    R.fromPairs,
    R.sort(([, a], [, b]) => a - b),
    R.toPairs,
    R.map(Number),
    R.path(['scales', 'opacity']),
  ),

  shadowScale: R.compose(
    R.fromPairs,
    R.map(R.set(classNamesLens, 'w4 h4')),
    R.toPairs,
    R.path(['scales', 'shadow']),
  ),

  maxWidths: R.path(['scales', 'maxWidths']),
};


/**
 * Actions
 */
const actions = {
  loadStyles({ commit }) {
    commit(TACHYONS.LOAD_STYLES, {
      classGroups: groupedClasses,
      colours,
      scales,
    });
  },
};


/**
 * Mutations
 */
const mutations = {
  [TACHYONS.LOAD_STYLES](state, payload) {
    state.classGroups = payload.classGroups;
    state.colours = payload.colours;
    state.scales = payload.scales;
  },
};


export default {
  namespaced: true,
  state: tachyonsState,
  getters,
  actions,
  mutations,
};
