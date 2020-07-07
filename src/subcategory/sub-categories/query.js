/**
 * Strapi: subcategory sub-categories Graph QL query
 */
const query = ({ urlKey }) => ({
  query: `
    {
      categoryList(
        filters: {
          url_key: {
            eq: "${urlKey}"
          }
        }
      ) {
        children {
          level
          name
          url_path
          url_suffix
          position
        }
      }
    }
  `,
});

export default query;
