import React, { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";
import { graphql } from "gatsby";
import Lost from "../components/Lost";
export default function BlogPost({ data }) {
  const staticData = data.googleSpreadsheetMoisSansTabacFeuille1;
  const [upToDateData, setUpToDateData] = useState(staticData);

  console.log(staticData);

  useEffect(() => {
    readRemoteFile(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTg7PMNtJyZ2rjxR-lLr2Ys2A7oWtGWvV6hephCkcAI4YnzuXhlHF5Fmby0R-YHaxYW75ImkpoTBfy0/pub?gid=0&single=true&output=csv",
      {
        complete: (results) => {
          const ParticipantsResults = results.data[staticData.index];
          console.log("Results:", results.data[staticData.index]);
          setUpToDateData({
            participant: ParticipantsResults[1],
            gain: ParticipantsResults[5],
            elimin_: ParticipantsResults[6],
          });
        },
      }
    );
  }, []);

  if (upToDateData.elimin_ === "TRUE") {
    return <Lost />;
  }

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
