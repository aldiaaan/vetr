import {default as vendorAxios} from 'axios';
import {MangadexContext} from './context';
import {MangadexRest} from './rest';

export const axios = vendorAxios.create();

axios.interceptors.request.use(
  async request => {
    if (request.url?.includes('/user/me')) {
      if (request.headers) {
        const token = await MangadexContext.STORAGE.getTokens();

        request.headers['authorization'] = `Bearer ${token.session}`;
      }
    }
    return request;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  error => {
    const status = error.response.status;

    if (status === 401 && error.config.url.includes('/auth/refresh')) {
      return Promise.reject(error);
    }

    if (status === 401 && !error.config.url.includes('/auth/refresh')) {
      return MangadexRest.refreshAccessToken().then(() => axios(error.config));
    }
    return Promise.reject(error);
  },
);
