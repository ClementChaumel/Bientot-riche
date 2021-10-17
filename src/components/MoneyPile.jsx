import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const MoneyPileWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 30;
  top: ${(props) => 93 - props.verticalOffset}%;
  transition: top ease-in-out 1s;

  & > .gatsby-image-wrapper {
    width: 100vw;
    height: 100vh;
  }
`;

export default function MoneyPile() {
  const startDate = new Date(2021, 10, 2); // November 2nd, 2021
  const endDate = new Date(2021, 11, 2); // December 2nd, 2021

  const [verticalOffset, setVerticalOffset] = useState(
    ((new Date() - startDate) / (endDate - startDate)) * 93
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setVerticalOffset(((now - startDate) / (endDate - startDate)) * 93);
    }, 1000 * 60 * 60 * 5); // refresh every 5 minutes

    return () => clearInterval(intervalId); //This is important
  }, []);

  return (
    <MoneyPileWrapper verticalOffset={verticalOffset}>
      <StaticImage src="../images/fric.png" />
    </MoneyPileWrapper>
  );
}
