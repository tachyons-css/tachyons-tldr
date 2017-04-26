import Vue from 'vue';
import Vuex from 'vuex';
import tachyons from './modules/tachyons';
import { scalesModule } from '../scales';
import { ClassNamesModule } from '../class-names';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    tachyons,
    classNames: ClassNamesModule,
    scales: scalesModule,
  },
  strict: debug,
});

export default store;
