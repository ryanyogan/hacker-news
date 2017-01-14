/* global window navigator */
import 'es6-promise/auto';
import { app, store } from './app';

// Hydrate our store with the SSR data
store.replaceState(window.__INITIAL_STATE__); // eslint-disable-line

app.$mount('#app');

// Service worker caching
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
