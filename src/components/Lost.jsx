import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import { StaticImage } from "gatsby-plugin-image";
import smokeGif from "../images/smoke.gif";

const BackgroundWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  filter: saturate(0);

  & > .gatsby-image-wrapper {
    height: 100vh;
    width: 100vw;
  }
`;

const SmokeWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  mix-blend-mode: multiply;
  opacity: 0.95;
  z-index: 10;

  & > img {
    height: 100vh;
    width: 100vw;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  font-size: 5rem;
  color: red;
  font-family: "IM Fell English SC", serif;
  z-index: 1;

  &::before {
    content: "";
    background: black;
    height: 6rem;
    width: 100vw;
    position: absolute;
    top: -1rem;
    left: 0;
    filter: blur(7px);
    z-index: -1;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 3rem;

    &::before {
      height: 4rem;
      top: -0.5rem;
    }
  }
`;

export default function Lost() {
  return (
    <>
      <Reset />
      <BackgroundWrapper>
        <StaticImage src="../images/peclo.jpeg" />
      </BackgroundWrapper>
      <Title>Dommage.</Title>
      <SmokeWrapper>
        <img src={smokeGif} />
      </SmokeWrapper>
    </>
  );
}
