import {useQuery, UseQueryOptions} from 'react-query';
import Mangadex, {
  MangadexCountryCode,
  MangadexEntityType,
  MangadexLocalizedValue,
  MangadexRestError,
} from '@vetr/mangadex';

export type UseMangaDetailsResult = {
  title: string;
  originalTitle: string;
  description: string;
  id: string;
  author: {
    name: string;
  };
  artist: {
    name: string;
  };
  altTitles: MangadexLocalizedValue[];
  cover: {
    url?: string;
  };
  tags: Array<{
    id: string;
    name: string;
  }>;
};

export type UseMangaDetailsArgs = {
  id: string;
};

export type UseMangaDetailsError = MangadexRestError;

export const useMangaDetails = (id: string, options?: UseQueryOptions<UseMangaDetailsResult, UseMangaDetailsError>) =>
  useQuery<UseMangaDetailsResult, UseMangaDetailsError>(
    `manga-${id}`,
    async () => {
      const manga = await Mangadex.Rest.getManga(id, {
        includes: [
          MangadexEntityType.ARTIST,
          MangadexEntityType.AUTHOR,
          MangadexEntityType.COVER_ART,
          MangadexEntityType.MANGA,
        ],
      });

      const relationships = Mangadex.Utils.groupRelationships(manga.data.relationships);

      const filename = relationships.cover_art?.[0]?.attributes?.fileName;

      return {
        title: manga.data.attributes.title['en'] || 'No title',
        originalTitle:
          manga.data.attributes.altTitles.find(
            title => Object.keys(title)[0] === manga.data.attributes.originalLanguage,
          )?.[manga.data.attributes.originalLanguage as MangadexCountryCode] || 'No title',
        description: manga.data.attributes.description['en'] || 'No description',
        id: manga.data.id,
        author: {
          name: relationships.author?.[0]?.attributes.name || 'Unknown author',
        },
        artist: {
          name: relationships.artist?.[0]?.attributes?.name || 'Unknown artist',
        },
        altTitles: manga.data.attributes.altTitles,
        cover: {
          url: filename ? Mangadex.Utils.buildCoverArtUrl(manga.data.id, filename, 'best') : undefined,
        },
        tags: manga.data.attributes.tags.map(t => ({
          name: t.attributes.name['en'],
          id: t.id,
        })),
      };
    },
    options,
  );
