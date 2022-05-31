import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

const API_URL = 'https://sidequest.onrender.com/api/dailyquests/all';

const questGet = () => {
  return new Promise((resolve, reject) => {
    // console.log('get quest');
    // console.log(params);
    console.log(`${API_URL}`);
    instance.get(`${API_URL}`)
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

// export const ACTIO_TYPES = {
//   FETCH_DAILY_QUESTS: 'FETCH_DAILY_QUESTS',
// };

// export function fetchDailyQuests() {
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/dailyquests/all`)
//       .then((response) => {
//         dispatch({
//           type: ACTIO_TYPES.FETCH_DAILY_QUESTS,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// }
