/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const API_URL = 'https://sidequest.onrender.com/api/homeTab';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

export function createPost(fields) {
  axios.post(`${API_URL}/posts/new`, fields, { headers })
    .then(
      (response) => {
        alert('Upload successful!');
      },
    )
    .catch((error) => {
      console.log(`error ${error}`);
    });
}
