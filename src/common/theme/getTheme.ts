import { PaletteMode, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

const commonTokens = () => ({
  primary: {
    main: "#8CC90A",
  },
});

const getTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    typography: {
      fontFamily: '"Oswald", sans-serif',
    },
    components: {
      MuiButton: {
        defaultProps: {
          sx: {
            textTransform: "none",
            color: "text.primary",
          },
          disableElevation: true,
        },
      },
    },
    palette: {
      mode,
      ...commonTokens(),
      ...(mode === "light"
        ? {
            // palette values for light mode
            text: {
              primary: "#444444",
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  };
};

export default getTheme;
