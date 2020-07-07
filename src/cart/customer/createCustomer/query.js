/**
 * Strapi: createCustomer Graph QL query
 */
const query = ({
  firstName,
  lastName,
  email,
  password,
  isSubscribed = false,
}) => ({
  query: `
    mutation {
      createCustomer(
        input: {
          firstname: "${firstName}"
          lastname: "${lastName}"
          email: "${email}"
          password: "${password}"
          is_subscribed: ${isSubscribed}
        }
      ) {
        customer {
          firstname
          lastname
          email
          is_subscribed
        }
      }
    }
  `,
});

export default query;
