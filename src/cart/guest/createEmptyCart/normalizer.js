import get from 'lodash/get';

/**
 * Strapi: guest createEmptyCart normalizer
 */
function normalizer(rawData) {
  const guestCartId = get(rawData, 'data.createEmptyCart', null);
  return guestCartId;
}

export default normalizer;
