export type MangadexChapterRelated = MangadexMangaRelated;

export type MangadexMangaRelated =
  | 'monochrome'
  | 'main_story'
  | 'adapted_from'
  | 'based_on'
  | 'prequel'
  | 'side_story'
  | 'doujinshi'
  | 'same_franchise'
  | 'shared_universe'
  | 'sequel'
  | 'spin_off'
  | 'alternate_story'
  | 'alternate_version'
  | 'preserialization'
  | 'colored'
  | 'serialization';

export type MangadexCoverArtAttributes = {
  volume: string | null;
  fileName: string;
  description: string;
  locale: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
};

export type MangadexCountryCode =
  | 'af'
  | 'sq'
  | 'en'
  | 'ja-ro'
  | 'it'
  | 'ru'
  | 'ja'
  | 'ko'
  | 'ar-dz'
  | 'ar-bh'
  | 'ar-eg'
  | 'ar-iq'
  | 'ar-jo'
  | 'ar-kw'
  | 'ar-lb'
  | 'ar-ly'
  | 'ar-ma'
  | 'ar-qa'
  | 'ar-om'
  | 'ar-sa'
  | 'ar-sy'
  | 'ar-tn'
  | 'ar-ae'
  | 'ar-ye'
  | 'eu'
  | 'be'
  | 'bg'
  | 'ca'
  | 'zh-hk'
  | 'zh-cn'
  | 'zh-sg'
  | 'zh-tw'
  | 'hr'
  | 'cs'
  | 'nl'
  | 'en'
  | 'en-au'
  | 'en-bz'
  | 'en-ca'
  | 'en-ie'
  | 'en-jm'
  | 'en-nz'
  | 'en-za'
  | 'en-tt'
  | 'en-gb'
  | 'en-us'
  | 'et'
  | 'fo'
  | 'fa'
  | 'fi'
  | 'fr-be'
  | 'fr-ca'
  | 'fr-lu'
  | 'fr'
  | 'da'
  | 'fr-ch'
  | 'gd'
  | 'nl-be'
  | 'de-at'
  | 'de-li'
  | 'de'
  | 'de-ch'
  | 'de-lu'
  | 'pt-br';

export const MangadexISOLang = Object.freeze({
  aa: ['Afar', 'Afar'],
  ab: ['Abkhazian', 'Аҧсуа'],
  af: ['Afrikaans', 'Afrikaans'],
  ak: ['Akan', 'Akana'],
  am: ['Amharic', 'አማርኛ'],
  an: ['Aragonese', 'Aragonés'],
  ar: ['Arabic', 'العربية'],
  as: ['Assamese', 'অসমীয়া'],
  av: ['Avar', 'Авар'],
  ay: ['Aymara', 'Aymar'],
  az: ['Azerbaijani', 'Azərbaycanca / آذربايجان'],
  ba: ['Bashkir', 'Башҡорт'],
  be: ['Belarusian', 'Беларуская'],
  bg: ['Bulgarian', 'Български'],
  bh: ['Bihari', 'भोजपुरी'],
  bi: ['Bislama', 'Bislama'],
  bm: ['Bambara', 'Bamanankan'],
  bn: ['Bengali', 'বাংলা'],
  bo: ['Tibetan', 'བོད་ཡིག / Bod skad'],
  br: ['Breton', 'Brezhoneg'],
  bs: ['Bosnian', 'Bosanski'],
  ca: ['Catalan', 'Català'],
  ce: ['Chechen', 'Нохчийн'],
  ch: ['Chamorro', 'Chamoru'],
  co: ['Corsican', 'Corsu'],
  cr: ['Cree', 'Nehiyaw'],
  cs: ['Czech', 'Česky'],
  cu: ['Old Church Slavonic / Old Bulgarian', 'словѣньскъ / slověnĭskŭ'],
  cv: ['Chuvash', 'Чăваш'],
  cy: ['Welsh', 'Cymraeg'],
  da: ['Danish', 'Dansk'],
  de: ['German', 'Deutsch'],
  dv: ['Divehi', 'ދިވެހިބަސް'],
  dz: ['Dzongkha', 'ཇོང་ཁ'],
  ee: ['Ewe', 'Ɛʋɛ'],
  el: ['Greek', 'Ελληνικά'],
  en: ['English', 'English'],
  eo: ['Esperanto', 'Esperanto'],
  es: ['Spanish', 'Español'],
  et: ['Estonian', 'Eesti'],
  eu: ['Basque', 'Euskara'],
  fa: ['Persian', 'فارسی'],
  ff: ['Peul', 'Fulfulde'],
  fi: ['Finnish', 'Suomi'],
  fj: ['Fijian', 'Na Vosa Vakaviti'],
  fo: ['Faroese', 'Føroyskt'],
  fr: ['French', 'Français'],
  fy: ['West Frisian', 'Frysk'],
  ga: ['Irish', 'Gaeilge'],
  gd: ['Scottish Gaelic', 'Gàidhlig'],
  gl: ['Galician', 'Galego'],
  gn: ['Guarani', "Avañe'ẽ"],
  gu: ['Gujarati', 'ગુજરાતી'],
  gv: ['Manx', 'Gaelg'],
  ha: ['Hausa', 'هَوُسَ'],
  he: ['Hebrew', 'עברית'],
  hi: ['Hindi', 'हिन्दी'],
  ho: ['Hiri Motu', 'Hiri Motu'],
  hr: ['Croatian', 'Hrvatski'],
  ht: ['Haitian', 'Krèyol ayisyen'],
  hu: ['Hungarian', 'Magyar'],
  hy: ['Armenian', 'Հայերեն'],
  hz: ['Herero', 'Otsiherero'],
  ia: ['Interlingua', 'Interlingua'],
  id: ['Indonesian', 'Bahasa Indonesia'],
  ie: ['Interlingue', 'Interlingue'],
  ig: ['Igbo', 'Igbo'],
  ii: ['Sichuan Yi', 'ꆇꉙ / 四川彝语'],
  ik: ['Inupiak', 'Iñupiak'],
  io: ['Ido', 'Ido'],
  is: ['Icelandic', 'Íslenska'],
  it: ['Italian', 'Italiano'],
  iu: ['Inuktitut', 'ᐃᓄᒃᑎᑐᑦ'],
  ja: ['Japanese', '日本語'],
  jv: ['Javanese', 'Basa Jawa'],
  ka: ['Georgian', 'ქართული'],
  kg: ['Kongo', 'KiKongo'],
  ki: ['Kikuyu', 'Gĩkũyũ'],
  kj: ['Kuanyama', 'Kuanyama'],
  kk: ['Kazakh', 'Қазақша'],
  kl: ['Greenlandic', 'Kalaallisut'],
  km: ['Cambodian', 'ភាសាខ្មែរ'],
  kn: ['Kannada', 'ಕನ್ನಡ'],
  ko: ['Korean', '한국어'],
  kr: ['Kanuri', 'Kanuri'],
  ks: ['Kashmiri', 'कश्मीरी / كشميري'],
  ku: ['Kurdish', 'Kurdî / كوردی'],
  kv: ['Komi', 'Коми'],
  kw: ['Cornish', 'Kernewek'],
  ky: ['Kirghiz', 'Kırgızca / Кыргызча'],
  la: ['Latin', 'Latina'],
  lb: ['Luxembourgish', 'Lëtzebuergesch'],
  lg: ['Ganda', 'Luganda'],
  li: ['Limburgian', 'Limburgs'],
  ln: ['Lingala', 'Lingála'],
  lo: ['Laotian', 'ລາວ / Pha xa lao'],
  lt: ['Lithuanian', 'Lietuvių'],
  lv: ['Latvian', 'Latviešu'],
  mg: ['Malagasy', 'Malagasy'],
  mh: ['Marshallese', 'Kajin Majel / Ebon'],
  mi: ['Maori', 'Māori'],
  mk: ['Macedonian', 'Македонски'],
  ml: ['Malayalam', 'മലയാളം'],
  mn: ['Mongolian', 'Монгол'],
  mo: ['Moldovan', 'Moldovenească'],
  mr: ['Marathi', 'मराठी'],
  ms: ['Malay', 'Bahasa Melayu'],
  mt: ['Maltese', 'bil-Malti'],
  my: ['Burmese', 'Myanmasa'],
  na: ['Nauruan', 'Dorerin Naoero'],
  nd: ['North Ndebele', 'Sindebele'],
  ne: ['Nepali', 'नेपाली'],
  ng: ['Ndonga', 'Oshiwambo'],
  nl: ['Dutch', 'Nederlands'],
  nn: ['Norwegian Nynorsk', 'Norsk (nynorsk)'],
  no: ['Norwegian', 'Norsk (bokmål / riksmål)'],
  nr: ['South Ndebele', 'isiNdebele'],
  nv: ['Navajo', 'Diné bizaad'],
  ny: ['Chichewa', 'Chi-Chewa'],
  oc: ['Occitan', 'Occitan'],
  oj: ['Ojibwa', 'ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin'],
  om: ['Oromo', 'Oromoo'],
  or: ['Oriya', 'ଓଡ଼ିଆ'],
  os: ['Ossetian / Ossetic', 'Иронау'],
  pa: ['Panjabi / Punjabi', 'ਪੰਜਾਬੀ / पंजाबी / پنجابي'],
  pi: ['Pali', 'Pāli / पाऴि'],
  pl: ['Polish', 'Polski'],
  ps: ['Pashto', 'پښتو'],
  pt: ['Portuguese', 'Português'],
  qu: ['Quechua', 'Runa Simi'],
  rm: ['Raeto Romance', 'Rumantsch'],
  rn: ['Kirundi', 'Kirundi'],
  ro: ['Romanian', 'Română'],
  ru: ['Russian', 'Русский'],
  rw: ['Rwandi', 'Kinyarwandi'],
  sa: ['Sanskrit', 'संस्कृतम्'],
  sc: ['Sardinian', 'Sardu'],
  sd: ['Sindhi', 'सिनधि'],
  se: ['Northern Sami', 'Sámegiella'],
  sg: ['Sango', 'Sängö'],
  sh: ['Serbo-Croatian', 'Srpskohrvatski / Српскохрватски'],
  si: ['Sinhalese', 'සිංහල'],
  sk: ['Slovak', 'Slovenčina'],
  sl: ['Slovenian', 'Slovenščina'],
  sm: ['Samoan', 'Gagana Samoa'],
  sn: ['Shona', 'chiShona'],
  so: ['Somalia', 'Soomaaliga'],
  sq: ['Albanian', 'Shqip'],
  sr: ['Serbian', 'Српски'],
  ss: ['Swati', 'SiSwati'],
  st: ['Southern Sotho', 'Sesotho'],
  su: ['Sundanese', 'Basa Sunda'],
  sv: ['Swedish', 'Svenska'],
  sw: ['Swahili', 'Kiswahili'],
  ta: ['Tamil', 'தமிழ்'],
  te: ['Telugu', 'తెలుగు'],
  tg: ['Tajik', 'Тоҷикӣ'],
  th: ['Thai', 'ไทย / Phasa Thai'],
  ti: ['Tigrinya', 'ትግርኛ'],
  tk: ['Turkmen', 'Туркмен / تركمن'],
  tl: ['Tagalog / Filipino', 'Tagalog'],
  tn: ['Tswana', 'Setswana'],
  to: ['Tonga', 'Lea Faka-Tonga'],
  tr: ['Turkish', 'Türkçe'],
  ts: ['Tsonga', 'Xitsonga'],
  tt: ['Tatar', 'Tatarça'],
  tw: ['Twi', 'Twi'],
  ty: ['Tahitian', 'Reo Mā`ohi'],
  ug: ['Uyghur', 'Uyƣurqə / ئۇيغۇرچە'],
  uk: ['Ukrainian', 'Українська'],
  ur: ['Urdu', 'اردو'],
  uz: ['Uzbek', 'Ўзбек'],
  ve: ['Venda', 'Tshivenḓa'],
  vi: ['Vietnamese', 'Tiếng Việt'],
  vo: ['Volapük', 'Volapük'],
  wa: ['Walloon', 'Walon'],
  wo: ['Wolof', 'Wollof'],
  xh: ['Xhosa', 'isiXhosa'],
  yi: ['Yiddish', 'ייִדיש'],
  yo: ['Yoruba', 'Yorùbá'],
  za: ['Zhuang', 'Cuengh / Tôô / 壮语'],
  zh: ['Chinese', '中文'],
  zu: ['Zulu', 'isiZulu'],
} as const);

export type MangadexOrder = 'asc' | 'desc';

export enum MangadexImageQuality {
  DATA = 'data',
  DATA_SAVER = 'data-saver',
}

export type MangadexLocalizedValue<T = string> = {[key in MangadexCountryCode]: T};

export type MangadexAuthorAttributes = {
  name: string;
  imageUrl: string;
  biograhpy: MangadexLocalizedValue[];
  twitter: string | null;
  pixiv: string | null;
  melonBook: string | null;
  fanBox: string | null;
  booth: string | null;
  nicoVideo: string | null;
  skeb: string | null;
  fantia: string | null;
  tumblr: string | null;
  youtube: string | null;
  weibo: string | null;
  naver: string | null;
  website: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
};

export type MangadexContentRating = 'safe' | 'suggestive' | 'erotica' | 'pornographic';

export type MangadexCustomListAttributes = {
  name: string;
  visibility: 'private' | 'public';
  version: number;
};

export type MangadexMangaAttributes = {
  title: MangadexLocalizedValue;
  altTitles: MangadexLocalizedValue[];
  description: MangadexLocalizedValue;
  isLocked: boolean;
  links: Record<string, string>;
  originalLanguage: string;
  lastVolume: string | null;
  lastChapter: string | null;
  publicationDemographic: 'shounen' | 'shoujo' | 'josei' | 'seinen' | 'none' | null;
  status: string | null;
  year: number | null;
  contentRating: MangadexContentRating;
  chapterNumbersResetOnNewVolume: boolean;
  tags: Array<{
    id: string;
    type: 'tag';
    attributes: {
      name: MangadexLocalizedValue;
      description: MangadexLocalizedValue;
      group: string;
      version: number;
    };
    relationships: Array<{
      id: string;
      type: string;
      attributes: any | null;
      related: MangadexMangaRelated;
    }>;
  }>;
  state: 'draft' | 'submitted' | 'published' | 'rejected';
  version: number;
  createdAt: string;
  updatedAt: string;
};

export type MangadexChapterAttributes = {
  title: string;
  volume: string | null;
  chapter: string | null;
  pages: number;
  translatedLanguage: MangadexCountryCode;
  uploader: string;
  externalUrl: string | null;
  version: string;
  createdAt: string;
  updatedAt: string;
  publishAt: string;
  readableAt: string;
};

export type MangadexFetchStatisticsOptions = {
  includes?: string[];
};

export enum MangadexEntityType {
  MANGA = 'manga',
  SCANLATION_GROUP = 'scanlation_group',
  COVER_ART = 'cover_art',
  TAG = 'tag',
  CHAPTER = 'chapter',
  USER = 'user',
  AUTHOR = 'author',
  ARTIST = 'artist',
}

export type MangadexUserAttributes = {
  roles: string[];
  username: string;
  version: number;
};

export type MangadexTagAttributes = {
  description: string[];
  group: string;
  name: MangadexLocalizedValue;
  version: number;
};

export type MangadexArtistAttributes = MangadexAuthorAttributes;

export type MangadexScanlationGroupAttributes = {
  name: string;
  altNames: MangadexLocalizedValue;
  website: string | null;
  ircServer: string | null;
  ircChannel: string | null;
  discord: string | null;
  contactEmail: string | null;
  description: string | null;
  twitter: string | null;
  mangaUpdates: string | null;
  focusedLanguage: MangadexCountryCode[];
  locked: boolean;
  official: boolean;
  inactive: boolean;
  publishDelay: string;
  version: number;
  createdAt: number;
  updatedAt: string;
};

export type MangadexMangaAttributeMap = {
  [MangadexEntityType.CHAPTER]: MangadexChapterAttributes;
  [MangadexEntityType.COVER_ART]: MangadexCoverArtAttributes;
  [MangadexEntityType.MANGA]: MangadexMangaAttributes;
  [MangadexEntityType.SCANLATION_GROUP]: MangadexScanlationGroupAttributes;
  [MangadexEntityType.TAG]: MangadexTagAttributes;
  [MangadexEntityType.USER]: MangadexUserAttributes;
  [MangadexEntityType.AUTHOR]: MangadexAuthorAttributes;
  [MangadexEntityType.ARTIST]: MangadexArtistAttributes;
};

export type MangadexTypeMap = {
  [MangadexEntityType.CHAPTER]: 'chapter';
  [MangadexEntityType.COVER_ART]: 'cover_art';
  [MangadexEntityType.MANGA]: 'manga';
  [MangadexEntityType.SCANLATION_GROUP]: 'scanlation_group';
  [MangadexEntityType.TAG]: 'tag';
  [MangadexEntityType.USER]: 'user';
  [MangadexEntityType.AUTHOR]: 'author';
  [MangadexEntityType.ARTIST]: 'artist';
};

export type MangadexRelationshipMap = {
  [MangadexEntityType.CHAPTER]: MangadexChapterRelationship;
  [MangadexEntityType.COVER_ART]: MangadexCoverArtRelationship;
  [MangadexEntityType.MANGA]: MangadexMangaRelationship;
  [MangadexEntityType.SCANLATION_GROUP]: MangadexScanlationGroupRelationship;
  [MangadexEntityType.TAG]: MangadexTagRelationship;
  [MangadexEntityType.USER]: MangadexUserRelationship;
  [MangadexEntityType.AUTHOR]: MangadexAuthorRelationship;
  [MangadexEntityType.ARTIST]: MangadexArtistRelationship;
};

export type MangadexUserRelationship = {
  id: string;
  type: 'user';
  attributes: MangadexUserAttributes | null;
};

export type MangadexMangaRelationship = {
  id: string;
  type: 'manga';
  related: MangadexMangaRelated;
  attributes: MangadexMangaAttributes | null;
};

export type MangadexArtistRelationship = {
  id: string;
  type: 'artist';
  attributes: MangadexArtistAttributes | null;
};

export type MangadexCoverArtRelationship = {
  id: string;
  type: 'cover_art';
  attributes: MangadexCoverArtAttributes | null;
};

export type MangadexTagRelationship = {
  id: string;
  type: 'tag';
  attributes: MangadexTagAttributes | null;
};

export type MangadexAuthorRelationship = {
  id: string;
  type: 'author';
  attributes: MangadexAuthorAttributes;
};

export type MangadexScanlationGroupRelationship = {
  id: string;
  type: 'scanlation_group';
  attributes: MangadexScanlationGroupAttributes | null;
};

export type MangadexChapterRelationship = {
  id: string;
  type: 'chapter';
  attributes: MangadexChapterAttributes | null;
};

export type MangadexRelationshipUnion =
  | MangadexUserRelationship
  | MangadexMangaRelationship
  | MangadexCoverArtRelationship
  | MangadexTagRelationship
  | MangadexScanlationGroupRelationship
  | MangadexArtistRelationship
  | MangadexChapterRelationship;

// MangadexRelation<'manga' | 'author' | 'user'> is equals to
// MangadexMangaRelationship | MangadexAuthorRelationship | MangadexUserRelationship
export type MangadexRelationship<T extends MangadexEntityType> = T extends MangadexEntityType
  ? {
      id: string;
      type: MangadexTypeMap[T];
      related?: MangadexMangaRelated;
      attributes: MangadexMangaAttributeMap[T];
    }
  : never;

// MangadexMappedRelationships<'manga' | 'tag'> equals to
// {
//    'manga': MangadexMangaRelationship[];
//    'tag': MangadexTagRelationship[];
// }
export type MangadexMappedRelationships<U extends MangadexEntityType> = {
  [K in U]: MangadexRelationship<K>[];
};

export type MangadexChaptersRelationships = Array<
  MangadexMangaRelationship | MangadexScanlationGroupRelationship | MangadexUserRelationship
>;
