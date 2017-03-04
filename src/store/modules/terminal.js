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
};


/**
 * Mutations
 */
/* eslint-disable no-param-reassign */
const mutations = {
  activateTerminal: (state) => {
    state.isActive = true;
  },

  deactivateTerminal: (state) => {
    state.isActive = false;
  },
};
/* eslint-enable no-param-reassign */


export default {
  state: terminalState,
  getters,
  actions,
  mutations,
};
