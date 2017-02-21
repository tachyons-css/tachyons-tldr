import { TERMINAL } from '../mutation-types';

/**
 * initial state
 */
const terminalState = {
  isActive: false,
  byClassName: false,
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
  activateTerminal({ commit }) {
    commit(TERMINAL.ACTIVATE, true);
  },

  deactivateTerminal({ commit }) {
    commit(TERMINAL.DEACTIVATE, false);
  },
};


/**
 * Mutations
 */
/* eslint-disable no-param-reassign */
const mutations = {
  [TERMINAL.ACTIVATE]: (state, value) => {
    state.isActive = value;
  },

  [TERMINAL.DEACTIVATE]: (state, value) => {
    state.isActive = value;
  },
};
/* eslint-enable no-param-reassign */


export default {
  state: terminalState,
  getters,
  actions,
  mutations,
};
