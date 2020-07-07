/**
 * Strapi: customer revokeToken Graph QL query
 */
const query = () => ({
  query: `
    mutation {
      revokeCustomerToken {
        result
      }
    }
  `,
});

export default query;
