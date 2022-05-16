import {useQuery, UseQueryOptions} from 'react-query';
import Mangadex, {MangadexRestError} from '@vetr/mangadex';

export type UseMeResult = {
  name: string;
};

export type UseMeError = MangadexRestError;

export const useMe = (options?: UseQueryOptions<UseMeResult, UseMeError>) =>
  useQuery<UseMeResult, UseMeError>(
    `me`,
    async () => {
      const me = await Mangadex.Rest.getLoggedInUserProfile();

      return {
        name: me.data.attributes.username,
      };
    },
    options,
  );
