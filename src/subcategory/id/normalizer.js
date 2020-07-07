import get from 'lodash/get';

/**
 * Strapi: subcategory id normalizer
 */
function normalizer(rawData) {
  const id = get(rawData, 'data.categoryList[0]id', null);
  const name = get(rawData, 'data.categoryList[0]name', null);
  return {
    id,
    name,
  };
}

export default normalizer;
