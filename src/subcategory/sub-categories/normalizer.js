import get from 'lodash/get';
import orderBy from 'lodash/orderBy';

/**
 * Strapi: subcategory sub-categories normalizer
 */
function normalizer(rawData) {
  const rawChildren = get(rawData, 'data.categoryList[0].children', []);
  const rawChildrenSorted = orderBy(rawChildren, 'position');
  return {
    items: rawChildrenSorted.map((item) => ({
      text: get(item, 'name', ''),
      href: `/${get(item, 'url_path', '')}${get(item, 'url_suffix', '')}`,
    })),
  };
}

export default normalizer;
