import express, {Express} from 'express';
import Mangadex, {MangadexCoverArtRelationship, MangadexEntityType} from '@vetr/mangadex';
import path from 'path';
import LRU from 'lru-cache';
import fs from 'fs';

const app: Express = express();
const port = process.env.PORT || 5000;

const cache = new LRU({
  max: 500,
  // 30 days
  ttl: 2592000000,
});

const OgMetaKey = {
  TITLE: '__META_OG_TITLE__',
  IMAGE: '__META_OG_IMAGE__',
  DESCRIPTION: '__META_OG_DESCRIPTION__',
  TYPE: '__META_OG_TYPE__',
  SITE_NAME: '__META_OG_SITE_NAME__',
};

const indexHtml = fs.readFileSync(path.join(__dirname, '../../vetr-web/dist/index.html'), {
  encoding: 'utf-8',
});

app.use('/static', express.static(path.join(__dirname, '../../vetr-web/dist/static')));
app.get('/ping', (_req, res) => res.send('pong'));
app.get('/manga/:id', async (req, res) => {
  const x = await Mangadex.Rest.getManga(req.params.id, {
    includes: [MangadexEntityType.COVER_ART],
  });

  const attrs = x.data.attributes;
  const coverRelationship = x.data.relationships.find(
    r => r.type === MangadexEntityType.COVER_ART,
  ) as MangadexCoverArtRelationship;

  let cover;

  if (coverRelationship.attributes?.fileName) {
    cover = Mangadex.Utils.buildCoverArtUrl(x.data.id, coverRelationship.attributes?.fileName, 'low');
  }

  const cacheKey = `manga-${req.params.id}`;

  let formattedHtml = cache.get(cacheKey);

  if (!formattedHtml) {
    formattedHtml = indexHtml
      .replace(OgMetaKey.TYPE, 'website')
      .replace(OgMetaKey.DESCRIPTION, attrs.description.en || 'No description')
      .replace(OgMetaKey.TITLE, attrs.title.en || attrs.title['ja-ro'] || 'No title')
      .replace(OgMetaKey.IMAGE, cover || '')
      .replace(OgMetaKey.SITE_NAME, 'Vetr');
    cache.set(cacheKey, formattedHtml);
  }

  res.set('Content-Type', 'text/html');
  res.send(formattedHtml);
});

app.get('/*', (_req, res) => {
  const cacheKey = 'default';

  let formattedHtml = cache.get(cacheKey);

  if (!formattedHtml) {
    formattedHtml = indexHtml
      .replace(OgMetaKey.TYPE, 'website')
      .replace(OgMetaKey.DESCRIPTION, 'Vetr manga reader')
      .replace(OgMetaKey.TITLE, 'Vetr')
      .replace(OgMetaKey.SITE_NAME, 'Vetr');
    cache.set(cacheKey, formattedHtml);
  }
  res.send(formattedHtml);
});

app.listen(port, () => {
  console.log(`[server]: server is listening at port ${port}`);
});
