import Vue from 'vue';
import Router from 'vue-router';

// import ClassNamesView from '../class-names';
// import ScalesView from '../scales';
// import PaletteView from '../palette';
// import ToolsView from '../tools';

Vue.use(Router);

const asyncCb = resolve => module => resolve(module.default);

// eslint-disable-next-line
const ClassNamesView = () => new Promise(r => require(['../class-names'], asyncCb(r)));
// eslint-disable-next-line
const ScalesView = () => new Promise(r => require(['../scales'], asyncCb(r)));
// eslint-disable-next-line
const PaletteView = () => new Promise(r => require(['../palette'], asyncCb(r)));
// eslint-disable-next-line
const ToolsView = () => new Promise(r => require(['../tools'], asyncCb(r)));

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
