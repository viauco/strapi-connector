import fetchWithGraphQl from '../../../fetchWithGraphQl';
import addSimpleProductsToCartQuery from './query';

/**
 * Strapi: common addSimpleProductsToCart fetcher
 */
async function fetcher({
  cartId,
  token = null,
  sku,
  quantity = 1,
}) {
  const query = addSimpleProductsToCartQuery({
    cartId,
    sku,
    quantity,
  });
  const rawData = await fetchWithGraphQl(query, token);
  return rawData;
}

export default fetcher;
