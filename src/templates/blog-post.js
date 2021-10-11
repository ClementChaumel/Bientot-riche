import React, { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";
import { graphql } from "gatsby";
export default function BlogPost({ data }) {
  const staticData = data.googleSpreadsheetMoisSansTabacFeuille1;
  const [upToDateData, setUpToDateData] = useState(staticData);

  useEffect(() => {
    readRemoteFile(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTg7PMNtJyZ2rjxR-lLr2Ys2A7oWtGWvV6hephCkcAI4YnzuXhlHF5Fmby0R-YHaxYW75ImkpoTBfy0/pub?gid=0&single=true&output=csv",
      {
        complete: (results) => {
          console.log("Results:", results.data[staticData.index]);
        },
      }
    );
  }, []);

  return (
    <div>
      <h1>{upToDateData.participant}</h1>
      <p>{upToDateData.gain} 🤑</p>
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    googleSpreadsheetMoisSansTabacFeuille1(participant: { eq: $slug }) {
      gain
      elimin_
      participant
      index
    }
  }
`;
