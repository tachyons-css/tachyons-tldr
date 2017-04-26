/**
 * initial state
 */
const scalesState = {
  categories: [
    'Spacing',
    'Typography',
    'Widths',
    'Heights',
    'Border',
    'Shadow',
    'Opacity',
  ],
  activeCategoryIndex: 0,
};

/**
 * Mutations
 */
const mutations = {
  selectScaleCategory(state, payload) {
    state.activeCategoryIndex = payload;
  },
};


export default {
  namespaced: true,
  state: scalesState,
  mutations,
};
