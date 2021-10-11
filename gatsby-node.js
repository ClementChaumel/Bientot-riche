exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allGoogleSpreadsheetMoisSansTabacFeuille1 {
        edges {
          node {
            participant
          }
        }
      }
    }
  `);

  data.allGoogleSpreadsheetMoisSansTabacFeuille1.edges.forEach((edge) => {
    const slug = edge.node.participant;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    });
  });
};
