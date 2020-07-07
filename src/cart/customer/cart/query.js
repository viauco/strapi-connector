import cartItemProductDefaultSchema from '../../schemas/cartItemProductDefaultSchema';

/**
 * Strapi: customer cart Graph QL query
 */
const query = ({
  cartItemProductSchema = cartItemProductDefaultSchema,
}) => ({
  query: `{
    customerCart {
      id
      items {
        id
        quantity
        product {
          ${cartItemProductSchema}
        }
      }
    }
  }`,
});

export default query;
