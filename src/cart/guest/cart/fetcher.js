import fetchWithGraphQl from '../../../fetchWithGraphQl';
import cartQuery from './query';

/**
 * Strapi: guest cart fetcher
 */
async function fetcher(cartId) {
  const rawData = await fetchWithGraphQl(cartQuery({ cartId }));
  return rawData;
}

export default fetcher;
