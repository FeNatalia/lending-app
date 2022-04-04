// NPM Packages
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfiguration = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BCKT,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfiguration = {
  apiKey: 'AIzaSyBxqfslJLgBcoXmWduPkUGuDnlwuTEf6gk',
  authDomain: 'netelixclone.firebaseapp.com',
  projectId: 'netelixclone',
  storageBucket: 'netelixclone.appspot.com',
  messagingSenderId: '31141031733',
  appId: '1:31141031733:web:860029f0cad4ba6448a67c',
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export const authInstance = getAuth(firebaseInstance);
