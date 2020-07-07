import cartItemProductDefaultSchema from '../../schemas/cartItemProductDefaultSchema';

/**
 * Strapi: guest cart Graph QL query
 */
const query = ({
  cartId,
  cartItemProductSchema = cartItemProductDefaultSchema,
}) => ({
  query: `
    {
      cart (
        cart_id: "${cartId}"
      ) {
        id
        items {
          id
          quantity
          product {
            ${cartItemProductSchema}
          }
        }
      }
    }
  `,
});

export default query;
