import R from 'ramda';
import hello from 'hello-color';
import { TACHYONS } from '../mutation-types';
import {
  groupedClasses,
  colours,
  scales,
} from '../../api';
import { dependencies } from '../../../package.json';

const testFirst = regex => R.compose(R.test(regex), R.head);


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
  solidColours(state) {
    return R.compose(
      R.map(colour => ({
        value: colour,
        negative: hello(colour).color,
      })),
    )(state.colours.solid);
  },
  spacingScale(state) {
    return state.scales.spacing;
  },
  widthScales(state) {
    return R.compose(
      R.map(R.fromPairs),
      R.groupBy(R.cond([
        [testFirst(/third/g), R.always('third')],
        [testFirst(/-/g), R.always('percent')],
        [R.T, R.always('step')],
      ])),
      R.toPairs,
    )(state.scales.widths);
  },
  typeScale(state) {
    return state.scales.type;
  },
  fontWeight(state) {
    return R.compose(
      R.fromPairs,
      R.sort((a, b) => b[1] - a[1]),
      R.toPairs,
      R.path(['scales', 'fontWeight']),
    )(state);
  },
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
