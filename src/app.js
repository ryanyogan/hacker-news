import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import store from './store';
import router from './router';
// import * as filters from './filters';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// register global utility filters
// Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

const app = new Vue({
  router,
  store,
  ...App,
});

export default { app };
