import cartItemProductDefaultSchema from '../../schemas/cartItemProductDefaultSchema';

/**
 * Strapi: common addSimpleProductsToCart Graph QL query
 */
const query = ({
  cartId,
  sku,
  quantity = 1,
  cartItemProductSchema = cartItemProductDefaultSchema,
}) => ({
  query: `
    mutation {
      addSimpleProductsToCart(
        input: {
          cart_id: "${cartId}"
          cart_items: [
            {
              data: {
                quantity: ${quantity}
                sku: "${sku}"
              }
            }
          ]
        }
      ) {
        cart {
          items {
            id
            quantity
            product {
              ${cartItemProductSchema}
            }
          }
        }
      }
    }
  `,
});

export default query;
