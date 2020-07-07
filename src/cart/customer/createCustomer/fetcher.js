import fetchWithGraphQl from '../../../fetchWithGraphQl';
import createCustomerQuery from './query';

/**
 * Strapi: createCustomer fetcher
 */
async function fetcher(queryData) {
  const rawData = await fetchWithGraphQl(createCustomerQuery(queryData));
  return rawData;
}

export default fetcher;
