// NPM Packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Project files
import { authInstance } from './firebase';
const provider = new GoogleAuthProvider();

export const createAccount = async (email, password) => {
  const account = { isCreated: false, payload: '' };
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password,
    );
    account.payload = userCredential.user.uid;
    account.isCreated = true;
  } catch (error) {
    console.error('authentification.js error', error);
    account.payload = error.code;
  }

  return account;
};

export const signIn = async (email, password) => {
  const account = { isLogged: false, payload: '' };
  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password,
    );
    account.payload = userCredential.user.uid;
    account.isLogged = true;
  } catch (error) {
    console.error('authentification.js error', error);
    account.payload = error.code;
  }

  return account;
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(authInstance, provider);
    GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    user.isLogged = true;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    return { errorCode, errorMessage, email, credential };
  }
};
