import fetchWithGraphQl from '../../../fetchWithGraphQl';
import generateCustomerTokenQuery from './query';

/**
 * Strapi: customer generateToken fetcher
 */
async function fetcher(email, password) {
  const rawData = await fetchWithGraphQl(generateCustomerTokenQuery(email, password));
  return rawData;
}

export default fetcher;
