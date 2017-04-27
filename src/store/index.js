import Vue from 'vue';
import Vuex from 'vuex';
import tachyons from './modules/tachyons';
import { scalesModule } from '../scales';
import { classNamesModule } from '../class-names';
import { toolsModule } from '../tools';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    tachyons,
    classNames: classNamesModule,
    tools: toolsModule,
    scales: scalesModule,
  },
  strict: debug,
});

export default store;
