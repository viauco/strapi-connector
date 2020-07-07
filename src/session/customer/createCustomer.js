import { fetchCreateCustomer, normalizeCreateCustomer } from '../../cart/customer/createCustomer';
import getError from '../../helpers/getError';

/**
 * Strapi: customer -> createCustomer
 */
export default async function createCustomer({
  firstName,
  lastName,
  email,
  password,
}) {
  const rawData = await fetchCreateCustomer({
    firstName,
    lastName,
    email,
    password,
  });

  const error = getError(rawData);
  if (error) {
    return {
      error,
    };
  }

  const data = normalizeCreateCustomer(rawData);
  return {
    ...data,
  };
}
