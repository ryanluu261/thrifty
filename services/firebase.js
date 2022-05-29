/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getStorage, ref, uploadBytes, getDownloadUrl,
} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCJ0EIhSEVHNZITfzwVNumrc21-_uXqjM',
  authDomain: 'firenotes-44351.firebaseapp.com',
  databaseURL: 'https://firenotes-44351-default-rtdb.firebaseio.com',
  projectId: 'firenotes-44351',
  storageBucket: 'firenotes-44351.appspot.com',
  messagingSenderId: '879015793856',
  appId: '1:879015793856:web:2325a8449e8bce47204925',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const uploadImage = (image, callback) => {
  if (image == null) {
    return;
  }
  const imageRef = ref(storage, 'images/random_name_here');
  uploadBytes(imageRef, image)
    .then((res) => {
      imageRef.getDownloadUrl()
        .then((url) => {
          callback(url);
        })
        .catch((e) => {
          alert(`Error Code: ${e.code} ${e.message}`);
        });
    })
    .catch((error) => {
      alert(`Error Code: ${error.code} ${error.message}`);
    });
};

export default uploadImage;
