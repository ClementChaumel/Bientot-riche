import React, { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";
import { graphql } from "gatsby";
import Lost from "../components/Lost";
import Counter from "../components/Counter";
import styled, { createGlobalStyle } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import DollarBills from "../components/DollarBills";
import MoneyPile from "../components/MoneyPile";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;

  & > .gatsby-image-wrapper {
    height: 100vh;
    width: 100vw;
  }
`;

export default function Participant({ data }) {
  const staticData = data.googleSpreadsheetMoisSansTabacFeuille1;
  const [upToDateData, setUpToDateData] = useState(staticData);
  const [participantsCount, setparticipantsCount] = useState(
    data.allGoogleSpreadsheetMoisSansTabacFeuille1.totalCount ?? 0
  );

  useEffect(() => {
    readRemoteFile(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTg7PMNtJyZ2rjxR-lLr2Ys2A7oWtGWvV6hephCkcAI4YnzuXhlHF5Fmby0R-YHaxYW75ImkpoTBfy0/pub?gid=0&single=true&output=csv",
      {
        complete: (results) => {
          const ParticipantsResults = results.data[staticData.index];
          setUpToDateData({
            participant: ParticipantsResults[1],
            gain: ParticipantsResults[5],
            elimin_: ParticipantsResults[6],
          });
          setparticipantsCount(results.data[4][11]);
        },
      }
    );
  }, [staticData.index]);

  if (upToDateData.elimin_ === "TRUE") {
    return <Lost />;
  }

  return (
    <Container>
      <title>{upToDateData.participant} - Futur.e milliardaire</title>
      <GlobalStyle />
      <BackgroundWrapper>
        <StaticImage src="../images/metalWall.jpeg" />
      </BackgroundWrapper>
      <DollarBills />
      <Counter
        participantsCount={participantsCount}
        prize={upToDateData.gain}
      ></Counter>
      <MoneyPile />
    </Container>
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
    allGoogleSpreadsheetMoisSansTabacFeuille1(
      filter: { elimin_: { eq: "FALSE" } }
    ) {
      totalCount
    }
  }
`;
