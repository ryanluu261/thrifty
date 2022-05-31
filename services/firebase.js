/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { initializeApp } from 'firebase/app';
import {
  getStorage, ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';
import 'react-native-get-random-values';
import { v4 } from 'uuid';

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

  const filename = v4();
  const imageRef = ref(storage, `images/${filename}`);
  uploadBytes(imageRef, image)
    .then((res) => {
      getDownloadURL(imageRef)
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
