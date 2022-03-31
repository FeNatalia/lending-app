// NPM Packages
import { collection, doc, getDocs } from 'firebase/firestore/lite'; // normal methods
import { addDoc, setDoc, updateDoc, getDoc } from 'firebase/firestore/lite'; // async methods

// Project files
import { fireStoreInstance } from './firebase';

export const createDocumentWithId = async (path, id, data) => {
  const documentReference = doc(fireStoreInstance, path, id);
  await setDoc(documentReference, data);

  return id;
};

export const createDocument = async (path, data) => {
  const collectionReference = collection(fireStoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);

  return documentReference.id;
};

export const getDocument = async (path, id) => {
  const documentReference = doc(fireStoreInstance, path, id);
  const document = await getDoc(documentReference);

  return { id: document.id, ...document.data() };
};

export const updateDocument = async (path, data) => {
  const documentReference = doc(fireStoreInstance, path, data.id);

  await updateDoc(documentReference, data);
};

export const getCollection = async path => {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
};
