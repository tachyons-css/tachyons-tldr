import Vue from 'vue';
import Vuex from 'vuex';
import tachyons from './modules/tachyons';
import classNames from './modules/class-names';
import terminal from './modules/terminal';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    tachyons,
    classNames,
    terminal,
  },
  strict: debug,
});

export default store;
