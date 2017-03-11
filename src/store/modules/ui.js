/**
 * initial state
 */
const uiState = {
  terminal: {
    isActive: false,
    byClassName: false,
  },
  scales: {
    categories: ['Spacing', 'Typography', 'Width', 'Height', 'Border',
      'Opacity', 'Shadow'],
    activeCategoryIndex: 0,
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
  selectScaleCategory(state, payload) {
    state.scales.activeCategoryIndex = payload;
  },

  activateTerminal(state) {
    state.terminal.isActive = true;
  },

  deactivateTerminal(state) {
    state.terminal.isActive = false;
  },
};


export default {
  namespaced: true,
  state: uiState,
  getters,
  actions,
  mutations,
};
