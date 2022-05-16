import {MangadexContext} from './context';
import {
  MangadexArtistRelationship,
  MangadexAuthorRelationship,
  MangadexChapterRelationship,
  MangadexCoverArtRelationship,
  MangadexEntityType,
  MangadexMangaRelationship,
  MangadexScanlationGroupRelationship,
  MangadexTagRelationship,
  MangadexUserRelationship,
} from './types';

export class MangadexUtils {
  static buildCoverArtUrl(mangaId: string, fileName: string, quality?: 'best' | 'low') {
    let format;

    switch (quality) {
      case 'low':
        format = '.256.jpg';
        break;
      default:
        format = '';
        break;
    }

    return `${MangadexContext.STATIC_ROOT_URL}/covers/${mangaId}/${fileName}${format}`;
  }
  static buildChapterImageUrl(hash: string, fileName: string) {
    return `${MangadexContext.STATIC_ROOT_URL}/data/${hash}/${fileName}`;
  }
  static groupRelationships(relationships: any): {
    [MangadexEntityType.ARTIST]?: MangadexArtistRelationship[];
    [MangadexEntityType.AUTHOR]?: MangadexAuthorRelationship[];
    [MangadexEntityType.CHAPTER]?: MangadexChapterRelationship[];
    [MangadexEntityType.COVER_ART]?: MangadexCoverArtRelationship[];
    [MangadexEntityType.MANGA]?: MangadexMangaRelationship[];
    [MangadexEntityType.SCANLATION_GROUP]?: MangadexScanlationGroupRelationship[];
    [MangadexEntityType.TAG]?: MangadexTagRelationship[];
    [MangadexEntityType.USER]?: MangadexUserRelationship[];
  } {
    return relationships.reduce((acc: any, val: any) => {
      if (!acc[val.type]) {
        acc[val.type] = [val];
      } else {
        acc[val.type].push(val);
      }

      return acc;
    }, {});
  }
}
