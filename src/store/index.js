import Vue from 'vue';
import Vuex from 'vuex';
import classNames from './modules/class-names';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    classNames,
  },
  strict: debug,
});

export default store;
