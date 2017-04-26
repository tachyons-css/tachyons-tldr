import Vue from 'vue';
import Router from 'vue-router';

import ClassNamesView from '../class-names';
import ScalesView from '../scales';
import PaletteView from '../palette';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { y: 0 };
  },
  routes: [
    { path: '/palette', component: PaletteView, meta: { index: 2 } },
    { path: '/scales', component: ScalesView, meta: { index: 1 } },
    { path: '/classes', component: ClassNamesView, meta: { index: 0 } },
    { path: '/', redirect: '/classes' },
  ],
});
