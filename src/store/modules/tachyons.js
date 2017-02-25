import { TACHYONS } from '../mutation-types';
import { groupedClasses, colours as tachyonsColours } from '../../api';
import { dependencies } from '../../../package.json';


/**
 * initial state
 */
const tachyonsState = {
  version: dependencies.tachyons.replace('^', 'v'),
  classGroups: {},
  colours: {},
};


/**
 * Getters
 */
const getters = {
};


/**
 * Actions
 */
const actions = {
  loadStyles({ commit }) {
    commit(TACHYONS.LOAD_STYLES, {
      classGroups: groupedClasses,
      colours: tachyonsColours,
    });
  },
};


/**
 * Mutations
 */
/* eslint-disable no-param-reassign */
const mutations = {
  [TACHYONS.LOAD_STYLES](state, { classGroups, colours }) {
    state.classGroups = classGroups;
    state.colours = colours;
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
