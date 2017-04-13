/**
 * initial state
 */
const uiState = {
  terminal: {
    isActive: false,
    byClassName: false,
  },
  scales: {
    categories: ['Spacing', 'Typography', 'Widths', 'Heights', 'Border',
      'Shadow', 'Opacity'],
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
