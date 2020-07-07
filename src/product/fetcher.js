import fetchWithGraphQl from '../fetchWithGraphQl';
import productQuery from './query';

/**
 * Strapi: product fetcher
 */
async function fetcher(productId) {
  const pid = productId.replace('.html', '');
  const rawData = await fetchWithGraphQl(productQuery(pid));
  return rawData;
}

export default fetcher;
