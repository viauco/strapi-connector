import fetchWithGraphQl from '../../../fetchWithGraphQl';
import revokeCustomerTokenQuery from './query';

/**
 * Strapi: customer revokeToken fetcher
 */
async function fetcher(token) {
  const rawData = await fetchWithGraphQl(revokeCustomerTokenQuery(), token);
  return rawData;
}

export default fetcher;
