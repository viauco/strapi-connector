import fetchWithGraphQl from '../fetchWithGraphQl';
import menuQuery from './query';

/**
 * Strapi: menu fetcher
 */
async function fetcher({
  numberOfLevels = 2,
  menuItemFields = [
    'name',
    'url_path',
    'url_suffix',
    'position',
  ],
}) {
  const query = menuQuery({ numberOfLevels, menuItemFields });
  const rawData = await fetchWithGraphQl(query);
  return rawData;
}

export default fetcher;
