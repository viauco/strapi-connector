import { fetchCart, normalizeCart } from '../../cart/guest/cart';
import getError from '../../helpers/getError';

/**
 * Strapi: guest -> cart
 */
export default async function cart(cartId) {
  const rawData = await fetchCart(cartId);

  const error = getError(rawData);
  if (error) {
    return {
      error,
    }
  }

  const data = normalizeCart(rawData);
  return {
    ...data,
  };
}
