import {MangadexContext} from '../context';
import {MangadexStorage} from './types';

export class WebLocalStorage implements MangadexStorage {
  async get(key: string) {
    return localStorage.get(key) as string;
  }
  async set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  async remove(key: string) {
    localStorage.removeItem(key);
  }
  async getTokens() {
    return {
      session: await this.get(MangadexContext.SESSION_TOKEN_KEY),
      refresh: await this.get(MangadexContext.REFRESH_TOKEN_KEY),
    };
  }
}
