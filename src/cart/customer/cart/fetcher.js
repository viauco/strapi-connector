import fetchWithGraphQl from '../../../fetchWithGraphQl';
import customerCartQuery from './query';

/**
 * Strapi: customer cart fetcher
 */
async function fetcher(token) {
  const rawData = await fetchWithGraphQl(customerCartQuery({}), token);
  return rawData;
}

export default fetcher;
