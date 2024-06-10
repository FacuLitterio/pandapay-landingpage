import { ThemeProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  PaletteMode,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import WhatsAppSpeedDial from "common/components/WhatsAppSpeedDial";
import CertificacionesSection from "components/CertificacionesSection";
import ContactoSection from "components/ContactoSection";
import FAQSection from "components/FAQSection";
import FooterSection from "components/FooterSection";
import InvestSection from "components/InvestSection";
import MainSection from "components/MainSection";
import MediosPagoSection from "components/MediosPagoSection";
import ServiciosSection from "components/ServiciosSection";
import TestimoniosSection from "components/TestimoniosSection";
import TransaccionesSection from "components/TransaccionesSection";
import { createContext, useMemo, useState } from "react";
import AppBar from "./common/components/AppBar";
import getTheme from "./common/theme/getTheme";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(() => createTheme(getTheme(mode)), [mode]);
  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
          }}
        >
          <AppBar />
          <MainSection />
          <MediosPagoSection />
          <ServiciosSection />
          <InvestSection />
          <TransaccionesSection />
          <FAQSection />
          <TestimoniosSection />
          <ContactoSection />
          <CertificacionesSection />
          <FooterSection />
          <WhatsAppSpeedDial />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
