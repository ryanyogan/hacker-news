import Vue from 'vue';
import Router from 'vue-router';
import { createListView } from '../views/CreateListView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top/:page(\\d+)?', component: createListView('top') },
    { path: '/', redirect: '/top' },
  ],
});
