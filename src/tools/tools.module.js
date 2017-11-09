import { skinCss, mqFy } from './utils';

/**
 * initial state
 */
const toolsState = {
  skin: {
    colour: '#4e4bec',
    name: 'neon-blue',
  },
  mq: {
    name: 'sticky',
    rules: 'position: sticky;',
    sm: '30em',
    lg: '60em',
  },
};

/**
 * Getters
 */
const getters = {
  skinCss: ({ skin: { name, colour } }) => skinCss(name, colour),
  mqfy: ({ mq: { name, sm, lg, rules } }) => mqFy(name, sm, lg, rules),
};

/**
 * Mutations
 */
const mutations = {
  updateSkin(state, payload) {
    state.skin[payload.type] = payload.value;
  },

  updateMq(state, payload) {
    state.mq[payload.type] = payload.value;
  },
};


export default {
  namespaced: true,
  state: toolsState,
  getters,
  mutations,
};
