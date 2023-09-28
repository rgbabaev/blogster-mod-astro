import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { i18n, languages } from 'src/i18n';
import { blog } from '../../lib/markdoc/frontmatter.schema';
import { readAll } from '../../lib/markdoc/read';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../../config';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => {
    return { params: { lang } };
  });
}

export const get = async (Astro: APIContext) => {
  const lang = i18n.getLangFromUrl(Astro.url);

  const posts = await readAll({
    directory: `${lang}/articles`,
    frontmatterSchema: blog,
  });

  const sortedPosts = posts
    .filter((p) => p.frontmatter.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    );

  let baseUrl = SITE_URL;
  // removing trailing slash if found
  // https://example.com/ => https://example.com
  baseUrl = baseUrl.replace(/\/+$/g, '');

  const rssItems = sortedPosts.map(({ frontmatter, slug }) => {
    if (frontmatter.external) {
      const title = frontmatter.title;
      const pubDate = frontmatter.date;
      const link = frontmatter.url;

      return {
        title,
        pubDate,
        link,
      };
    }

    const title = frontmatter.title;
    const pubDate = frontmatter.date;
    const description = frontmatter.description;
    const link = `${baseUrl}/blog/${slug}`;

    return {
      title,
      pubDate,
      description,
      link,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: baseUrl,
    items: rssItems,
  });
};
