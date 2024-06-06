import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Stack } from "@mui/material";
import React from "react";

const RedesSociales: React.FC<{ color?: string }> = (props) => {
  const { color = "text.primary" } = props;
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        size="small"
        sx={{
          color,
        }}
      >
        <FacebookIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          color,
        }}
      >
        <TwitterIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          color,
        }}
      >
        <LinkedInIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
    </Stack>
  );
};

export default RedesSociales;
