import http from '../utils/request';

export default {
  get: async (lat: number, long: number) =>
    http.get(`data/3.0/onecall?lat=${lat}&lon=${long}&units=metric`),
  address: async (lat: number, long: number) =>
    http.get(`geo/1.0/reverse?lat=${lat}&lon=${long}`),
};
