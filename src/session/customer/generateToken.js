import { fetchGenerateToken, normalizeGenerateToken } from '../../cart/customer/generateToken';

import get from 'lodash/get';

/**
 * Strapi: customer -> generateToken
 */
export default async function generateToken({ email, password }) {
  const rawData = await fetchGenerateToken(email, password);
  const data = normalizeGenerateToken(rawData);
  return {
    ...data,
  };
}
