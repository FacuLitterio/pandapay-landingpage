import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { PropsWithChildren } from "react";

const generateBoxShadow = (numStars: number): string => {
  let boxShadowValue = `${Math.random() * 2000}px ${
    Math.random() * 2000
  }px #FFF`;
  for (let i = 1; i < numStars; i++) {
    boxShadowValue += `, ${Math.random() * 2000}px ${
      Math.random() * 2000
    }px #FFF`;
  }
  return boxShadowValue;
};

const shadowsSmall = generateBoxShadow(700);
const shadowsMedium = generateBoxShadow(200);
const shadowsBig = generateBoxShadow(100);

const Background = styled(Box)({
  height: "100%",
  width: "100%",
  background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
  overflow: "hidden",
  position: "relative",
});

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
    animation: `animStar ${animationDuration}s linear infinite`,
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
      <StarLayer size={1} boxShadow={shadowsSmall} animationDuration={50} />
      <StarLayer size={2} boxShadow={shadowsMedium} animationDuration={100} />
      <StarLayer size={3} boxShadow={shadowsBig} animationDuration={150} />
      {children}
    </Background>
  );
};

export default StarBackground;
