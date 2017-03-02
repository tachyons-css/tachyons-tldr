import R from 'ramda';
import hello from 'hello-color';
import { TACHYONS } from '../mutation-types';
import {
  groupedClasses,
  colours,
  scales,
} from '../../api';
import { dependencies } from '../../../package.json';


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
