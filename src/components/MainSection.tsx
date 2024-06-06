import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PatternSVG from "common/assets/Main/Pattern.svg";
import DevicePaymentImage from "common/assets/Main/PaymentDevice2.jpg";
import AnimateWhileView from "common/components/AnimateWhileView";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import { MEDIOS_DE_PAGO_LOGOS } from "common/constants";
import { motion } from "framer-motion";
import RedesSociales from "./RedesSociales";

const APPBAR_OFFSET = "60px";

const AnimatedPaper = motion(Paper);

const MainSection = () => {
  const theme = useTheme();
  const isMdDevice = useMediaQuery(theme.breakpoints.down("md"));

  const FormasDePago = () => {
    return (
      <Stack direction="row" sx={{ mt: 2 }}>
        {MEDIOS_DE_PAGO_LOGOS.slice(0, 3).map((mp) => (
          <Paper elevation={0}>
            <img src={mp} height={20} width={100} />
          </Paper>
        ))}
      </Stack>
    );
  };

  return (
    <Box
      component="section"
      sx={{
        mt: APPBAR_OFFSET,
        minHeight: { md: "auto", lg: "100vh", xl: "100vh" },
        background: `url(${PatternSVG}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <Grid
        container
        sx={{
          px: { xs: 4, sm: 4, md: 8, lg: 22 },
          py: { xs: 5, md: 8 },
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={10} md={6}>
          <Stack spacing={2}>
            <AnimateWhileView>
              <RedesSociales />
            </AnimateWhileView>
            <AnimatedTitle
              id="Inicio"
              sx={{
                xs: { fontSize: ".6rem" },
                md: { fontSize: "2rem" },
                lg: { fontSize: "3rem" },
              }}
              variant="h3"
              text="¡Potencia las Ventas de tu Negocio con PandaPay!"
              primaryWord="Pay!"
            />
            <AnimatedSubtitle
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontSize: ".9rem" }}
              text="Ofrecemos soluciones de cobro personalizadas para impulsar el
              crecimiento de tu negocio. Desde dispositivos de venta variados
              hasta opciones de acreditación flexibles, descubre cómo podemos
              llevar tus ventas a otro nivel."
            />
            <AnimateWhileView>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  maxWidth: 200,
                  color: "background.paper",
                  textTransform: "none",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Empezá a Cobrar
              </Button>
            </AnimateWhileView>
            <AnimateWhileView>
              <FormasDePago />
            </AnimateWhileView>
          </Stack>
        </Grid>
        {!isMdDevice && (
          <Grid item md={4}>
            <AnimatedPaper
              initial={{ opacity: 0, bottom: 10 }}
              whileInView={{ opacity: 1, bottom: 0 }}
              transition={{ delay: 0.2 }}
              elevation={4}
              sx={{
                height: 420,
                width: 400,
                borderRadius: 5,
                background: `url(${DevicePaymentImage}) no-repeat`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                boxShadow: (theme) => theme.shadows[5],
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MainSection;
