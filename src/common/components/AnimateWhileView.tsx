import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const AnimatedBox = motion(Box);

const AnimateWhileView: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AnimatePresence>
      <AnimatedBox
        whileInView="reveal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </AnimatedBox>
    </AnimatePresence>
  );
};

export default AnimateWhileView;
