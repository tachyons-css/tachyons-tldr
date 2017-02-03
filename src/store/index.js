import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    propNameQuery: null,
  },

  actions: {
    searchForProp: ({ commit }, { query }) => {
      commit('SET_PROP_NAME_QUERY', { query });
    },
  },

  mutations: {
    SET_PROP_NAME_QUERY: (state, { query }) => {
      state.propNameQuery = query;
    },
  },

  getters: {},
});

export default store;
/* eslint-enable no-param-reassign */
