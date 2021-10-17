import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import dollarBill from "../images/dollardollarbillsyo.gif";

const falling = keyframes`{
    0% {
      opacity: 1;
      top: -20%;
    }
    100% {
      opacity: 1;
      top: 100%;
    }
}`;

const BillsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const DollarBillWrapper = styled.div`
  position: absolute;
  top: -10%;
  opacity: 0;

  left: ${(props) => props.offset}%;
  z-index: ${(props) => (props.depth < 3 ? 100 : 15)};
  animation: ${falling} ${(props) => props.speed}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  transform: rotate(${(props) => props.rotation}deg);
  & > img {
    height: ${(props) => props.size}px;
  }
`;

export default function DollarBills() {
  const [dollarBillArray, setDollarBillArray] = useState([]);

  useEffect(() => {
    const _dollarBillArray = [];
    for (let i = 0; i < 20; i++) {
      _dollarBillArray.push({
        size: Math.floor(Math.random() * (300 - 50 + 1)) + 50,
        speed: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
        rotation: Math.floor(Math.random() * (360 - 0 + 1)) + 0,
        delay: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
        offset: Math.floor(Math.random() * (100 - 0 + 1)) - 10,
        depth: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
      });
    }
    setDollarBillArray(_dollarBillArray);
  }, []);

  return (
    <BillsContainer>
      {dollarBillArray.map((bill) => (
        <DollarBillWrapper
          size={bill.size}
          speed={bill.speed}
          rotation={bill.rotation}
          delay={bill.delay}
          offset={bill.offset}
          depth={bill.depth}
        >
          <img src={dollarBill} alt="" />
        </DollarBillWrapper>
      ))}
    </BillsContainer>
  );
}
