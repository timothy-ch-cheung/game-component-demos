import React from "react";
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode;
}

const firstColour = "#d4f0f0"
const secondColour = "#8fcaca"

const MainBackground = styled.div`
    animation:slide 20s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, ${firstColour} 50%, ${secondColour} 50%);
    top:0;
    bottom:0;
    left:-50%;
    right:-50%;
    opacity:.5;
    position:fixed;
    z-index:-1;

    @keyframes slide {
        0% {
            transform:translateX(-25%);
        }
     
        100% {
            transform:translateX(25%);
        }
    }
`;

const SecondaryBackground = styled(MainBackground)`
    animation-direction:alternate-reverse;
    animation-duration:9s;
`;

const TertiaryBackground = styled(MainBackground)`
    animation-duration:10s;
`;

export const Background: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <MainBackground />
      <SecondaryBackground/>
      <TertiaryBackground/>
      <div>{props.children}</div>
    </div>
  );
};
