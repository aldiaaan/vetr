import {MangadexContext} from './context';
import {MangadexRest} from './rest';
import {MangadexUtils} from './utils';

const Mangadex = {
  Context: MangadexContext,
  Rest: MangadexRest,
  Utils: MangadexUtils,
};

export * from './rest';
export * from './types';
export * from './errors';
export default Mangadex;
