import { fetchMergeCarts, normalizeMergeCarts } from 'react-storefront-magento2-connector/cart/common/mergeCarts';

import get from 'lodash/get';

/**
 * Strapi: common -> mergeCarts
 */
export default async function mergeCarts({ token, sourceCartId, destinationCartId }) {
  const rawData = await fetchMergeCarts(token, sourceCartId, destinationCartId);
  const data = normalizeMergeCarts(rawData);
  return {
    ...data,
  };
}
