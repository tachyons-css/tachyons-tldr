import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const ClassNamesView = () =>
  import(/* webpackChunkName: "class-names" */ '../class-names/class-names.view');
const ScalesView = () =>
  import(/* webpackChunkName: "scales" */ '../scales/scales.view');
const PaletteView = () =>
  import(/* webpackChunkName: "palette" */ '../palette/palette.view');
const ToolsView = () =>
  import(/* webpackChunkName: "tools" */ '../tools/tools.view');

export default new Router({
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { y: 0 };
  },
  routes: [
    { path: '/tools', component: ToolsView, meta: { index: 3 } },
    { path: '/palette', component: PaletteView, meta: { index: 2 } },
    { path: '/scales', component: ScalesView, meta: { index: 1 } },
    { path: '/classes', component: ClassNamesView, meta: { index: 0 } },
    { path: '/', redirect: '/classes' },
  ],
});
