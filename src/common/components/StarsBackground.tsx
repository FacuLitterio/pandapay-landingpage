import { Box } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import React, { PropsWithChildren } from "react";

const generateBoxShadow = (numStars: number): string => {
  let boxShadowValue = `${Math.random() * 2000}px ${
    Math.random() * 2000
  }px #8CC90A`;
  for (let i = 1; i < numStars; i++) {
    boxShadowValue += `, ${Math.random() * 2000}px ${
      Math.random() * 2000
    }px #8CC90A`;
  }
  return boxShadowValue;
};

const shadowsSmall = generateBoxShadow(700);
const shadowsMedium = generateBoxShadow(200);
const shadowsBig = generateBoxShadow(100);

const Background = styled(Box)({
  height: "100%",
  width: "100%",
  backgroundColor: "transparent",
  overflow: "hidden",
  position: "relative",
});

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

interface StarLayerProps {
  size: number;
  boxShadow: string;
  animationDuration: number;
}

const StarLayer = styled("div")<StarLayerProps>(
  ({ size, boxShadow, animationDuration }) => ({
    width: `${size}px`,
    height: `${size}px`,
    background: "transparent",
    boxShadow: boxShadow,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    animation: `${animStar} ${animationDuration}s linear infinite`,
    "&:after": {
      content: '""',
      position: "absolute",
      top: "2000px",
      width: `${size}px`,
      height: `${size}px`,
      background: "transparent",
      boxShadow: boxShadow,
    },
  })
);

const StarBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Background>
      <StarLayer size={4} boxShadow={shadowsSmall} animationDuration={50} />
      <StarLayer size={5} boxShadow={shadowsMedium} animationDuration={100} />
      <StarLayer size={6} boxShadow={shadowsBig} animationDuration={150} />
      {children}
      <Box
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: -1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#8CC90A"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,245.3C672,245,768,267,864,272C960,277,1056,267,1152,224C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Background>
  );
};

export default StarBackground;
