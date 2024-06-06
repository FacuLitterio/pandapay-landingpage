import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: 40,
    height: 3,
    left: -50,
    top: "18%",
    transform: "translateY(-130%)",
    backgroundColor: theme.palette.primary.main,
  },
}));
