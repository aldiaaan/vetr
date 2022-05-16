import qs from 'qs';
import {MangadexContext} from '../context';
import {MangadexRestError} from '../errors/mangadex-error';
import {axios} from '../internals';
import {
  MangadexArtistRelationship,
  MangadexAuthorRelationship,
  MangadexChapterAttributes,
  MangadexContentRating,
  MangadexCountryCode,
  MangadexCoverArtRelationship,
  MangadexEntityType,
  MangadexMangaAttributes,
  MangadexMangaRelationship,
  MangadexOrder,
  MangadexScanlationGroupRelationship,
  MangadexUserAttributes,
  MangadexUserRelationship,
} from '../types';

export type GetMangaOptions = {
  includes?: MangadexEntityType[];
};

export type GetMangaReturn = {
  result: 'ok' | 'error';
  response: 'entity';
  data: {
    id: string;
    type: 'manga';
    attributes: MangadexMangaAttributes;
    relationships: Array<
      MangadexMangaRelationship | MangadexCoverArtRelationship | MangadexAuthorRelationship | MangadexArtistRelationship
    >;
  };
};

export type GetMangaStatisticsReturn = {
  result: 'ok';
  statistics: {
    [key: string]: {
      follows: number;
      rating: {
        average: number;
        distribution: {
          1: number;
          2: number;
          3: number;
          4: number;
          5: number;
          6: number;
          7: number;
          8: number;
          9: number;
          10: number;
        };
      };
    };
  };
};

export type GetMangaFeedOptions = {
  limit?: number;
  offset?: number;
  translatedLanguage?: MangadexCountryCode[];
  originalLanguage?: MangadexCountryCode[];
  excludedOriginalLanguage?: MangadexCountryCode[];
  contentRating?: MangadexCountryCode[];
  excludedGroups?: string[];
  excludedUploaders?: string[];
  includeFutureUpdates?: string;
  createdAtSince?: string;
  updatedAtSince?: string;
  publishAtSince?: string;
  order?: {
    createdAt?: 'asc' | 'desc';
    updatedAt?: 'asc' | 'desc';
    publishAt?: 'asc' | 'desc';
    readableAt?: 'asc' | 'desc';
    volume?: 'asc' | 'desc';
    chapter?: 'asc' | 'desc';
  };
  includes?: string[];
};

export type GetMangaFeedReturn = {
  result: 'ok';
  response: 'collections';
  limit: number;
  offset: number;
  total: number;
  data: Array<{
    id: string;
    type: 'chapter';
    attributes: MangadexChapterAttributes;
    relationships: Array<MangadexMangaRelationship | MangadexScanlationGroupRelationship | MangadexUserRelationship>;
  }>;
};

export type SearchMangaOptions = {
  limit?: number;
  offset?: number;
  title?: string;
  authors?: string[];
  artists?: string[];
  year?: number;
  includedTags?: string[];
  includedTagsMode?: 'AND' | 'OR';
  excludedTags?: string[];
  excludedTagsMode?: 'AND' | 'OR';
  status?: Array<'ongoing' | 'completed' | 'hiatus' | 'canceled'>;
  originalLanguage?: string[];
  excludedOriginalLanguage?: string[];
  availableTranslatedLanguage?: string[];
  publicationDemographic?: 'shounen' | 'shoujo' | 'josei' | 'seinen' | 'none';
  ids?: string[];
  contentRating?: Array<'safe' | 'suggestive' | 'erotica' | 'pornographic'>;
  createdAtSince?: string;
  updatedAtSince?: string;
  order?: Partial<{
    title: 'asc' | 'desc';
    year: 'asc' | 'desc';
    createdAt: 'asc' | 'desc';
    updatedAt: 'asc' | 'desc';
    latestUploadedChapter: 'asc' | 'desc';
    followedCount: 'asc' | 'desc';
    relevance: 'asc' | 'desc';
  }>;
  includes?: string[];
  hasAvailableChapters?: '0' | '1' | 'true' | 'false';
  group?: string;
};

export type SearchMangaReturn = {
  result: string;
  response: string;
  data: Array<{
    id: string;
    type: 'manga';
    attributes: MangadexMangaAttributes;
    relationships: Array<MangadexCoverArtRelationship | MangadexAuthorRelationship | MangadexArtistRelationship>;
  }>;
  limit: number;
  offset: number;
  total: number;
};

export type GetMangaAggregateOptions = {
  translatedLanguage?: MangadexCountryCode[];
  groups?: string[];
};

export type GetMangaAggregateReturn = {
  result: 'ok';
  volumes: {
    [key: string]: {
      volume: string;
      count: number;
      chapters: {
        [key: string]: {
          chapter: string;
          id: string;
          others: string[];
          count: number;
        };
      };
    };
  };
};

export type SearchChapterOptions = {
  limit?: number;
  offset?: number;
  ids?: string[];
  title?: string;
  groups?: string[];
  // TODO: unknown type
  uploader?: string;
  manga?: string[];
  volume?: string[];
  chapter?: string[];
  translatedLanguage?: MangadexCountryCode[];
  originalLanguage?: MangadexCountryCode[];
  excludedOriginalLanguage?: MangadexCountryCode[];
  contentRating?: MangadexContentRating[];
  excludedGroups?: string[];
  excludedUploaders?: string[];
  includeFutureUpdates?: string;
  createdAtSince?: string;
  updatedAtSince?: string;
  publishAtSince?: string;
  order?: {
    createdAt?: MangadexOrder;
    updatedAt?: MangadexOrder;
    publishAt?: MangadexOrder;
    readableAt?: MangadexOrder;
    volume?: MangadexOrder;
    chapter?: MangadexOrder;
  };
};

export type SearchChapterReturn = {
  result: 'ok';
  response: 'collection';
  data: Array<{
    id: string;
    type: 'chapter';
    attributes: MangadexChapterAttributes;
    relationships: Array<MangadexMangaRelationship | MangadexScanlationGroupRelationship | MangadexUserRelationship>;
  }>;
};

export type GetChapterOptions = {includes?: MangadexEntityType[]};

export type GetChapterReturn = {
  data: {
    id: string;
    type: 'chapter';
    attributes: MangadexChapterAttributes;
    relationships: Array<MangadexMangaRelationship>;
  };
  response: 'entity';
  result: 'ok';
};

export type GetChapterImagesReturn = {
  result: string;
  baseUrl: string;
  chapter: {
    hash: string;
    data: string[];
    dataSaver: string[];
  };
};

export type GetChapterImagesOptions = {
  forcePort443?: boolean;
};

export type RefreshAccessTokenPostResult = {
  result: 'ok';
  token: {
    session: string;
    refresh: string;
  };
  message: string;
};

export type LoginOptions = {
  username: string;
  password: string;
};

export type LoginReturn = {
  result: string;
  token: {
    session: string;
    refresh: string;
  };
};

export type GetLoggedInUserProfileReturn = {
  data: {
    attributes: MangadexUserAttributes;
    id: string;
    relationships: MangadexScanlationGroupRelationship;
    type: 'user';
  };
  response: 'entity';
  result: string;
};

export class MangadexRest {
  static async getManga(id: string, options?: GetMangaOptions): Promise<GetMangaReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/manga/${id}?${qs.stringify(options)}`);
    return data;
  }
  static async getMangaStatistics(mangaIds: string[]): Promise<GetMangaStatisticsReturn> {
    const {data} = await axios.get(
      `${MangadexContext.API_ROOT_URL}/statistics/manga?${qs.stringify({manga: mangaIds})}`,
    );
    return data;
  }
  static async getMangaFeed(id: string, options?: GetMangaFeedOptions): Promise<GetMangaFeedReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/manga/${id}/feed?${qs.stringify(options)}`);
    return data;
  }
  static async searchManga(options?: SearchMangaOptions): Promise<SearchMangaReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/manga?${qs.stringify(options)}`);
    return data;
  }
  static async getMangaAggregate(id: string, options?: GetMangaAggregateOptions): Promise<GetMangaAggregateReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/manga/${id}/aggregate?${qs.stringify(options)}`);
    return data;
  }

  static async getChapterImages(id: string, options?: GetChapterImagesOptions): Promise<GetChapterImagesReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/at-home/server/${id}?${qs.stringify(options)}`);
    return data;
  }
  static async getChapter(id: string, options?: GetChapterOptions): Promise<GetChapterReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/chapter/${id}?${qs.stringify(options)}`);
    return data;
  }
  static async searchChapter(options?: SearchChapterOptions): Promise<SearchChapterReturn> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/chapter?${qs.stringify(options)}`);
    return data;
  }

  static async getLoggedInUserProfile(): Promise<any> {
    const {data} = await axios.get(`${MangadexContext.API_ROOT_URL}/user/me`);
    return data;
  }

  static async login(options?: LoginOptions): Promise<LoginReturn> {
    try {
      const {data} = await axios.post<LoginReturn>(`${MangadexContext.API_ROOT_URL}/auth/login`, options);

      MangadexContext.STORAGE.set(MangadexContext.REFRESH_TOKEN_KEY, data.token.refresh);
      MangadexContext.STORAGE.set(MangadexContext.SESSION_TOKEN_KEY, data.token.session);

      return data;
    } catch (err: any) {
      throw new MangadexRestError({
        message: 'Something went wrong when trying to login. \n reason: ' + err.message,
      });
    }
  }
  static async refreshAccessToken(refreshToken?: string): Promise<void> {
    try {
      const token = await MangadexContext.STORAGE.getTokens();

      const {data} = await axios.post<RefreshAccessTokenPostResult>(`${MangadexContext.API_ROOT_URL}/auth/refresh`, {
        token: refreshToken || token.refresh,
      });

      MangadexContext.STORAGE.set(MangadexContext.REFRESH_TOKEN_KEY, data.token.refresh);
      MangadexContext.STORAGE.set(MangadexContext.SESSION_TOKEN_KEY, data.token.session);
    } catch (err: any) {
      MangadexContext.STORAGE.remove(MangadexContext.REFRESH_TOKEN_KEY);
      MangadexContext.STORAGE.remove(MangadexContext.SESSION_TOKEN_KEY);
      throw new MangadexRestError({
        message: 'Something went wrong when trying to refresh access token. \n reason: ' + err.message,
      });
    }
  }
}
