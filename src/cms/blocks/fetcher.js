import fetchWithGraphQl from '../../fetchWithGraphQl';
import cmsBlocksQuery from './query';

/**
 * Strapi: cms blocks fetcher
 */
async function fetcher({ identifiers }) {
  const query = cmsBlocksQuery({ identifiers });
  const rawData = await fetchWithGraphQl(query);
  return rawData;
}

export default fetcher;
