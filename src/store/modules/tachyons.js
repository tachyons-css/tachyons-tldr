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

/**
 * ☐ spacing
 * ✅ type-scale
 * ✅ font-weight
 * ✅ border-radius
 * ☐ border-widths
 * ☐ heights
 * ✅ widths
 * ☐ max-widths
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

  spacingScale(state) {
    return state.scales.spacing;
  },

  widthScales: R.compose(
    R.map(R.fromPairs),
    R.groupBy(R.cond([
      [utils.testFirst(/third/g), R.always('third')],
      [utils.testFirst(/-/g), R.always('percent')],
      [R.T, R.always('step')],
    ])),
    R.toPairs,
    utils.allSelectorsToClassNames,
    R.path(['scales', 'widths']),
  ),

  typeScale(state) {
    return state.scales.type;
  },

  fontWeight: R.compose(
    R.fromPairs,
    R.sort((a, b) => b[1] - a[1]),
    R.toPairs,
    R.path(['scales', 'fontWeight']),
  ),

  borderRadius: R.compose(
    R.map(R.fromPairs),
    R.groupBy(R.cond([
      [utils.testFirst(/top|left|right|bottom/), R.always('positional')],
      [R.T, R.always('scale')],
    ])),
    R.map(R.cond([
      [utils.testFirst(/pill/), R.set(classNamesLens, 'w4 h3')],
      [utils.isPositional, R.set(classNamesLens, 'w4 br3 h3')],
      [R.T, R.set(classNamesLens, 'w3 h3')],
    ])),
    R.toPairs,
    R.map(R.objOf('value')),
    utils.allSelectorsToClassNames,
    R.path(['scales', 'borderRadius']),
  ),
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
