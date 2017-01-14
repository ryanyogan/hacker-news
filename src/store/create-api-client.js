import Firebase from 'firebase/app';
import 'firebase/database';

const config = {
  databaseUrl: 'https://hacker-news.firebaseio.com',
};
const version = '/v0';

Firebase.initializeApp(config);
const api = Firebase.database().ref(version);

export default api;
