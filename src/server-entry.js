import { app, router, store } from './app';

const isDev = process.env.NODE_ENV !== 'production';

export default (context) => {
  const s = isDev && Date.now();

  // Set the router location
  router.push(context.url);
  const matchedComponents = router.getMatchedComponents();

  // no matched routes
  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' });
  }

  return Promise.all(matchedComponents.map((component) => { // eslint-disable-line
    if (component.preFetch) {
      return component.preFetch(store);
    }
  })).then(() => {
    if (isDev) console.log(`data pre-fetch: ${Date.now() - s}ms`); // eslint-disable-line
    context.initialState = store.state; //eslint-disable-line
    return app;
  });
};
