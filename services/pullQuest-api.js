import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

const API_URL = 'https://sidequest.onrender.com/api/dailyquests';

const questGet = (id) => {
  const params = {
    id,
  };

  return new Promise((resolve, reject) => {
    // console.log('get user');
    // console.log(params);
    console.log(`${API_URL}/${params.id}`);
    instance.get(`${API_URL}/${params.id}`)
      .then((response) => {
        // console.log(`${API_URL}/${params.id}`);
        // console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(`sidequest user api error: ${error}`);
        reject(error);
      });
  });
};

export default questGet;
