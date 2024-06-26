import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Hidden, Paper, Stack } from "@mui/material";
import DevicePaymentImage from "common/assets/Main/PostnetMain.png";
import AnimateWhileView from "common/components/AnimateWhileView";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import ImageContainer from "common/components/ImageContainer";
import StarBackground from "common/components/StarsBackground";
import { MEDIOS_DE_PAGO_LOGOS } from "common/constants";
import onClickWhatsApp from "common/helpers/onClickWhatsApp";
import RedesSociales from "./RedesSociales";

const APPBAR_OFFSET = "60px";

const MainSection = () => {
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
    <StarBackground>
      <Box
        id="Inicio"
        component="section"
        sx={{
          mt: APPBAR_OFFSET,
          px: { xs: 4, sm: 12, md: 18, xl: 25 },
          py: { xs: 5, sm: 10, xl: 15 },
        }}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={5}>
          <Grid item xs={12} md={6} xl={4}>
            <Stack spacing={2}>
              <AnimateWhileView>
                <RedesSociales />
              </AnimateWhileView>
              <AnimatedTitle
                sx={{
                  xs: { fontSize: ".6rem" },
                  md: { fontSize: "2rem" },
                  lg: { fontSize: "3rem" },
                }}
                variant="h3"
                text="¡Impulsa tus Ventas con PandaPay!"
                primaryWord="Pay!"
              />
              <AnimatedSubtitle
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: ".9rem" }}
                text={`Transforma tu negocio con nuestras soluciones de 
                cobro personalizadas diseñadas para maximizar tus ingresos. 
                Con una variedad de dispositivos de venta y opciones de acreditación 
                flexibles, PandaPay es tu socio ideal para llevar tus ventas al siguiente nivel. 
                ¡Descubre cómo podemos ayudarte a crecer y triunfar en el mercado!`}
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
                  onClick={onClickWhatsApp}
                >
                  Empezá a Cobrar
                </Button>
              </AnimateWhileView>
              <AnimateWhileView>
                <FormasDePago />
              </AnimateWhileView>
            </Stack>
          </Grid>
          <Hidden mdDown>
            <Grid item md={6} xl={4}>
              <ImageContainer
                src={DevicePaymentImage}
                sx={{ maxHeight: 500 }}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </StarBackground>
  );
};

export default MainSection;
