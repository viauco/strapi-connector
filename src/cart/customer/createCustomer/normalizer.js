import get from 'lodash/get';

/**
 * Strapi: createCustomer normalizer
 */
function normalizer(rawData) {
  const rawCustomerData = get(rawData, 'data.createCustomer.customer', null);
  const firstName = get(rawCustomerData, 'firstname', null);
  const lastName = get(rawCustomerData, 'lastname', null);
  const isSubscribed = get(rawCustomerData, 'is_subscribed', null);
  return {
    account: {
      firstName,
      lastName,
      isSubscribed,
    },
  };
}

export default normalizer;
