import axios from 'axios';

const ROOT_URL = 'https://sidequest.onrender.com/api/';

export const ACTIO_TYPES = {
  FETCH_DAILY_QUESTS: 'FETCH_DAILY_QUESTS',
};

export function fetchDailyQuests() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/dailyquests/all`)
      .then((response) => {
        dispatch({
          type: ACTIO_TYPES.FETCH_DAILY_QUESTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
