import fetchWithGraphQl from '../../../fetchWithGraphQl';
import mergeCartsQuery from './query';

/**
 * Strapi: common mergeCarts fetcher
 */
async function fetcher(token, sourceCartId, destinationCartId) {
  const rawData = await fetchWithGraphQl(mergeCartsQuery({ sourceCartId, destinationCartId }), token);
  return rawData;
}

export default fetcher;
