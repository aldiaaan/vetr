import {MangadexStorage} from './storage/types';
import {WebLocalStorage} from './storage/web-local-storage';

export type MangadexContext = {
  API_ROOT_URL: string;
  STORAGE: MangadexStorage;
};

export const MangadexContext = {
  API_ROOT_URL: 'https://api.mangadex.org',
  STATIC_ROOT_URL: 'https://uploads.mangadex.org',
  SESSION_TOKEN_KEY: '__mangadex-session-token',
  REFRESH_TOKEN_KEY: '__mangadex-refresh-token',
  STORAGE: new WebLocalStorage(),
};
