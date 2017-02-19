import Vue from 'vue';
import Router from 'vue-router';

import ClassNamesView from '../views/ClassNamesView';
import ScalesView from '../views/ScalesView';
import PaletteView from '../views/PaletteView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/palette', component: PaletteView, meta: { hierarchy: 2 } },
    { path: '/scales', component: ScalesView, meta: { hierarchy: 1 } },
    { path: '/classes', component: ClassNamesView, meta: { hierarchy: 0 } },
    { path: '/', redirect: '/classes' },
  ],
});
