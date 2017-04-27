/**
 * initial state
 */
const toolsState = {
  colour: {
    value: '#4e4bec',
    name: 'neon-blue',
  },
};

/**
 * Getters
 */
const getters = {
  skin: ({ colour: { name, value } }) => (`
.${name} { color: ${value}; }
.bg-${name} { background-color: ${value}; }
.b--${name} { border-color: ${value}; }

.hover-${name}:hover,
.hover-${name}:focus { color: ${value}; }

.hover-bg-${name}:hover,
.hover-bg-${name}:focus { background-color: ${value}; }`
  ),
};

/**
 * Mutations
 */
const mutations = {
  updateName(state, payload) {
    state.colour.name = payload;
  },

  updateValue(state, payload) {
    state.colour.value = payload;
  },
};


export default {
  namespaced: true,
  state: toolsState,
  getters,
  mutations,
};
