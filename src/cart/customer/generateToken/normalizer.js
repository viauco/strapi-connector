import get from 'lodash/get';

/**
 * Strapi: customer generateToken normalizer
 */
function normalizer(rawData) {
  const token = get(rawData, 'data.generateCustomerToken.token', null);
  return {
    token,
  };
}

export default normalizer;
