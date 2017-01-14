import api from 'create-api';

const fetch = (child) => {
  const cache = api.cachedItems;
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child));
  }

  return new Promise((resolve, reject) => {
    api.child(child).once('value', (snapshot) => {
      const val = snapshot.val();
      if (val) val.__lastUpdated = Date.now(); // eslint-disable-line
      cache && cache.set(child, val); // eslint-disable-line
      resolve(val);
    }, reject);
  });
};

export const fetchItem = id => fetch(`item/${id}`);

export const fetchItems = ids => Promise.all(ids.map(id => fetchItem(id)));

export const fetchItemsByType = type => (
  api.cachedIds && api.cachedIds[type]
    ? Promise.resolve(api.cachedIds[type])
    : fetch(`${type}stores`)
);

export const fetchUser = id => fetch(`user/${id}`);

export const watchList = (type, cb) => {
  let first = true;
  const ref = api.child(`${type}stories`);
  const handler = (snapshot) => {
    if (first) {
      first = false;
    } else {
      cb(snapshot.val());
    }
  };

  ref.on('value', handler);
  return () => {
    ref.off('value', handler);
  };
};

const warmCache = () => {
  fetchItems((api.cacheIds.top || []).slice(0, 30));
  setTimeout(warmCache, 1000 * 60 * 15);
};

// warm the front page cache on 15 min interval
if (api.onServer && !api.warmCacheStarted) {
  api.warmCacheStarted = true;
  warmCache();
}
