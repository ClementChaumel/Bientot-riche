import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const Participants = ({ data }) => {
  const entries = data.allGoogleSpreadsheetMoisSansTabacFeuille1.edges;
  return (
    <div>
      <h1>Participants</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.node.participant}>
            <Link to={`/${entry.node.participant}`}>
              {entry.node.participant}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allGoogleSpreadsheetMoisSansTabacFeuille1 {
      edges {
        node {
          participant
        }
      }
    }
  }
`;

export default Participants;
