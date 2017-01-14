import Firebase from 'firebase';
import LRU from 'lru-cache';

let api;
const config = {
  databaseUrl: 'https://hacker-news.firebaseio.com',
};
const version = '/v0';

if (process.__API__) { // eslint-disable-line
  api = process.__API__; // eslint-disable-line
} else {
  Firebase.initializeApp(config);
  api = process.__API__ = Firebase.database().ref(version); // eslint-disable-line
  api.onServer = true;

  api.cachedItems = LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15, // 15 Minutes
  });

  api.cachedIds = {};
  ['top', 'new', 'show', 'ask', 'job'].forEach((type) => {
    api.child(`${type}stores`).on('value', (snapshot) => {
      api.cachedIds[type] = snapshot.val();
    });
  });
}

export default Object.freeze(api);
