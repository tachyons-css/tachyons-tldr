// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import App from './App';
import store from './store';

sync(store, router);

require('tachyons');
require('./index.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app />',
  router,
  store,
  ...App,
});

// app.$mount('#app');
