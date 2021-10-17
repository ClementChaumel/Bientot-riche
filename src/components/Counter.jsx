import React from "react";
import styled, { keyframes } from "styled-components";
import { Reset } from "styled-reset";
import bezel from "../images/bezel.png";

const textShadow = keyframes`{
	0% {
		text-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
			-0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	5% {
		text-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
			-2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	10% {
		text-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
			-0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	15% {
		text-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
			-0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	20% {
		text-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
			-3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	25% {
		text-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
			-1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	30% {
		text-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
			-0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	35% {
		text-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
			-3.896914047650351px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	40% {
		text-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
			-3.870905614848819px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	45% {
		text-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
			-2.231056963361899px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	50% {
		text-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
			-0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	55% {
		text-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
			-2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	60% {
		text-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
			-2.202193051050636px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	65% {
		text-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
			-2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	70% {
		text-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
			-0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	75% {
		text-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
			-1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	80% {
		text-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
			-0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	85% {
		text-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
			-0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	90% {
		text-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
			-3.443339761481782px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	95% {
		text-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
			-2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
	100% {
		text-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
			-2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3),
			0 0 3px;
	}
}`;
const scanline = keyframes`{
    0% {
        bottom: 100%;
    }
    80% {
        bottom: 100%;
    }
    100% {
        bottom: 0%;
    }
}`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 4rem 0;
  box-sizing: border-box;
`;

const TextSection = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-family: "Press Start 2P", monospace;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.language === "korean" ? "#caffd1" : "#5bf870")};
  font-size: ${(props) => (props.language === "korean" ? "2.5rem" : "1.8rem")};
  margin-bottom: 1rem;
  animation: ${textShadow} 4s infinite;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.language === "korean" ? "1.5rem" : "1rem")};
  }
`;

const Value = styled(Text)`
  font-size: 6rem;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Monitor = styled.div`
  position: relative;
  width: 80vw;
  margin: 0 auto;
  padding: 5vh 0;
  z-index: 50;

  &:before {
    content: "";
    display: block;
    height: 85%;
    position: absolute;
    width: 100%;
    background-color: #000000;
    -webkit-filter: blur(2px);
    filter: blur(22px);
  }
`;
const Bezel = styled.div`
  position: relative;
  border: 30px solid transparent;
  border-image-source: url(${bezel});
  border-image-slice: 30 fill;
  border-image-outset: 0;
  overflow: hidden;
`;
const ScanLine = styled.div`
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  animation: ${scanline} 10s linear infinite;
`;

const CRT = styled.div`
  font-size: max(1rem, 2.2vmin);
  position: relative;
  background: #05321e;
  background-image: radial-gradient(ellipse, #05321e 0%, #050505 90%);
  animation: on 2s linear;
  transition: all 0.5s;
  overflow: hidden;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 8px;
    z-index: 2;
    pointer-events: none;
  }
`;

export default function Counter({ participantsCount, prize }) {
  return (
    <>
      <Reset />
      <Monitor>
        <Bezel>
          <CRT>
            <ScanLine></ScanLine>
            <TextWrapper>
              <TextSection>
                <Text language="korean">* 방 귀 *</Text>
                <Text>Nombre de joueurs</Text>
                <Value>{participantsCount}</Value>
              </TextSection>
              <TextSection>
                <Text language="korean">* 오 줌 &nbsp;똥 *</Text>
                <Text>Cagnotte</Text>
                <Value>{prize}</Value>
              </TextSection>
            </TextWrapper>
          </CRT>
        </Bezel>
      </Monitor>
    </>
  );
}
