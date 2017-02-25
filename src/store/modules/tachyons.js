import { TACHYONS } from '../mutation-types';
import { groupedClasses } from '../../api/styles';
import { dependencies } from '../../../package.json';


/**
 * initial state
 */
const tachyonsState = {
  version: dependencies.tachyons.replace('^', 'v'),
  classGroups: {},
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
    commit(TACHYONS.LOAD_STYLES, groupedClasses);
  },
};


/**
 * Mutations
 */
/* eslint-disable no-param-reassign */
const mutations = {
  [TACHYONS.LOAD_STYLES](state, classGroups) {
    state.classGroups = classGroups;
  },
};
/* eslint-enable no-param-reassign */


export default {
  state: tachyonsState,
  getters,
  actions,
  mutations,
};
