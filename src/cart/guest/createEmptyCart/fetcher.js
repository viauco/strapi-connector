import fetchWithGraphQl from '../../../fetchWithGraphQl';
import createEmptyCartQuery from './query';

/**
 * Strapi: guest createEmptyCart fetcher
 */
async function fetcher() {
  const rawData = await fetchWithGraphQl(createEmptyCartQuery());
  return rawData;
}

export default fetcher;
