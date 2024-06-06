import { Typography, TypographyProps } from "@mui/material";
import splitString from "common/helpers/splitString";
import { motion } from "framer-motion";
import React from "react";

type AnimatedTitleProps = {
  text: string;
} & TypographyProps;

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const AnimatedTypography = motion(Typography);

const AnimatedSubtitle: React.FC<AnimatedTitleProps> = ({ text, ...rest }) => {
  const { variant = "body2", paragraph = true } = rest;
  const textChars = splitString(text);
  return (
    <AnimatedTypography
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02 }}
      variant={variant}
      paragraph={paragraph}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(rest as any)}
    >
      {textChars.map((char, i) => (
        <motion.span
          key={i}
          transition={{ duration: 0.5 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </AnimatedTypography>
  );
};

export default AnimatedSubtitle;
