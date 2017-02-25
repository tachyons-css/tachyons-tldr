import Vue from 'vue';
import Router from 'vue-router';

import ClassesView from '../views/ClassesView';
import ScalesView from '../views/ScalesView';
import PaletteView from '../views/PaletteView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/palette', component: PaletteView, meta: { index: 2 } },
    { path: '/scales', component: ScalesView, meta: { index: 1 } },
    { path: '/classes', component: ClassesView, meta: { index: 0 } },
    { path: '/', redirect: '/classes' },
  ],
});
