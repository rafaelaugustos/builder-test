import axios from 'axios';

const HTTPClient = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  params: {
    appid: 'a34d7b1f63d6bbdc12e9bf919ee54ffe',
  },
});

export default HTTPClient;
