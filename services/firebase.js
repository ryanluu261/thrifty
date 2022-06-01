/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { initializeApp } from 'firebase/app';
import {
  getStorage, ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';
import 'react-native-get-random-values';
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: 'AIzaSyBPsdq66EUmFsEqj6wB4SHi2AX7AQZh4I4',
  authDomain: 'secondchatapp-2c4ca.firebaseapp.com',
  projectId: 'secondchatapp-2c4ca',
  storageBucket: 'secondchatapp-2c4ca.appspot.com',
  messagingSenderId: '965105434186',
  appId: '1:965105434186:web:adccf15f8cda49051030b3',
  measurementId: 'G-0YVGT6GCX4',
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
