// NPM Packages
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfiguration = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BCKT,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfiguration = {
//   apiKey: 'AIzaSyAcX7KodyU8PH4bEDlUDBiRKQ4nPlh3WZ4',
//   authDomain: 'auth-dev-81132.firebaseapp.com',
//   projectId: 'auth-dev-81132',
//   storageBucket: 'auth-dev-81132.appspot.com',
//   messagingSenderId: '190164900032',
//   appId: '1:190164900032:web:7f9f75c5306653937d3525',
// };

const firebaseInstance = initializeApp(firebaseConfiguration);

export const authInstance = getAuth(firebaseInstance);
