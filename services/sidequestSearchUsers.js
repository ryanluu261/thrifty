import axios from 'axios';

const instance = axios.create(
  {
    baseURL: '',
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  },
);
const API_URL = 'https://sidequest.onrender.com/api/users';
// const API_URL = 'http://localhost:9090/api/users';

const getAllUsers = (id) => {
  return new Promise((resolve, reject) => {
    console.log(`${API_URL}/all`);
    instance.get(`${API_URL}/all`)
      .then((response) => {
        // console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        // console.log(error);
        // console.log(`sidequest user api error: ${error}`);
        reject(error);
      });
  });
};

export default getAllUsers;
