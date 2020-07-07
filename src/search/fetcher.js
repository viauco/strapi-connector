import { fetchSubcategory } from '../subcategory';

/**
 * Strapi: search fetcher
 * > uses subcategory fetcher underneath
 */
async function fetcher({
  pageSize = 16,
  currentPage = 1,
  filter = '',
  sort = '',
  search = '',
}) {
  const rawData = await fetchSubcategory({
    pageSize,
    currentPage,
    filter,
    sort,
    search,
  });
  return rawData;
}

export default fetcher;
