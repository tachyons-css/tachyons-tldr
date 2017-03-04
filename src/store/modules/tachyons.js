import R from 'ramda';
import hello from 'hello-color';
import { TACHYONS } from '../mutation-types';
import {
  groupedClasses,
  colours,
  scales,
} from '../../api';
import { renameKeysBy } from '../../api/utils';
import { dependencies } from '../../../package.json';

const testFirst = regex => R.compose(R.test(regex), R.head);
const classNamesLens = R.lensPath([1, 'classNames']);
const countLens = R.lens(
  R.head,
  R.assocPath([1, 'count']),
);


/**
 * initial state
 */
const tachyonsState = {
  version: dependencies.tachyons.replace('^', 'v'),
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
      [testFirst(/third/g), R.always('third')],
      [testFirst(/-/g), R.always('percent')],
      [R.T, R.always('step')],
    ])),
    R.toPairs,
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
      [testFirst(/top|left|right|bottom/), R.always('positional')],
      [R.T, R.always('scale')],
    ])),
    // R.map(R.over(countLens, R.replace(/br(-+)?/g, ''))),
    R.map(R.cond([
      [testFirst(/pill/), R.set(classNamesLens, 'w4')],
      [
        testFirst(/(top|left|right|bottom)/),
        R.set(classNamesLens, 'w4 br3'),
      ],
      [R.T, R.set(classNamesLens, 'w3')],
    ])),
    R.toPairs,
    R.map(R.objOf('value')),
    renameKeysBy(R.replace(/\./, '')),
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
/* eslint-disable no-param-reassign */
const mutations = {
  [TACHYONS.LOAD_STYLES](state, payload) {
    state.classGroups = payload.classGroups;
    state.colours = payload.colours;
    state.scales = payload.scales;
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: tachyonsState,
  getters,
  actions,
  mutations,
};
