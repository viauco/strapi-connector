import { normalizeSubcategory } from '../subcategory';

/**
 * Strapi: search normalizer
 * > uses subcategory normalizer underneath
 */
function normalizer(...args) {
  return normalizeSubcategory(...args);
}

export default normalizer;
