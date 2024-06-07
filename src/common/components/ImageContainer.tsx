import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const AnimatedPaper = motion(Paper);

const ImageContainer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <AnimatedPaper
      initial={{ opacity: 0, bottom: 10 }}
      whileInView={{ opacity: 1, bottom: 0 }}
      transition={{ delay: 0.2 }}
      elevation={0}
      sx={{
        height: { md: 400, lg: 450, xl: 480 },
        width: "100%",
        maxWidth: 450,
        borderRadius: 20,
        outlineColor: (theme) => theme.palette.primary.main,
        outlineWidth: 2.5,
        outlineStyle: "dashed",
        outlineOffset: 10,
        margin: "0 auto",
        background: `url(${src}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
};

export default ImageContainer;
