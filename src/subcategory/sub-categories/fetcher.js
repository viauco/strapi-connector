import fetchWithGraphQl from '../../fetchWithGraphQl';
import subcategorySubCategoriesQuery from './query';

/**
 * Strapi: subcategory sub-categories fetcher
 */
async function fetcher({ urlKey }) {
  const query = subcategorySubCategoriesQuery({ urlKey });
  const rawData = await fetchWithGraphQl(query);
  return rawData;
}

export default fetcher;
