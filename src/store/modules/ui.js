/**
 * initial state
 */
const uiState = {
  terminal: {
    isActive: false,
    byClassName: false,
  },
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
const mutations = {
  activateTerminal(state) {
    state.terminal.isActive = true;
  },

  deactivateTerminal(state) {
    state.terminal.isActive = false;
  },

  toggleSearchByClassName(state) {
    state.terminal.byClassName = !state.terminal.byClassName;
  },
};


export default {
  namespaced: true,
  state: uiState,
  getters,
  actions,
  mutations,
};
