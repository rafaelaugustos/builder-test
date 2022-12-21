import {atom} from 'recoil';

export const weatherAtom = atom({
  key: 'weather',
  default: {
    current: {
      wind_speed: 0,
      feels_like: 0,
      humidity: 0,
      temp: 0,
      weather: [],
    },
  },
});
