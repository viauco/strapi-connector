import get from 'lodash/get';

/**
 * Strapi: customer revokeToken normalizer
 */
function normalizer(rawData) {
  const result = get(rawData, 'data.revokeCustomerToken.result', false);
  return {
    result,
  };
}

export default normalizer;
