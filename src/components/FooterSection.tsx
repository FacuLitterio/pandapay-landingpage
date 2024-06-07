import { Avatar, Grid, Link, Stack, Typography } from "@mui/material";
import PandaPayIcon from "common/assets/PandaPay_Logo.png";
import { DEFAULT_MARGIN_TOP } from "common/constants";
import RedesSociales from "./RedesSociales";

const FooterSection = () => {
  const PandaPayLogo = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar src={PandaPayIcon} sx={{ height: 45, width: 45 }} />
      <Typography
        variant="h6"
        fontWeight="bold"
        component="span"
        color="background.paper"
      >
        PandaPay
      </Typography>
    </Stack>
  );

  const Texto = (
    <Typography variant="body2" color="background.paper">
      Descubre nuestras soluciones de cobro personalizadas y eficientes para tu
      negocio.
    </Typography>
  );

  const CompaniaInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Sobre PandaPay
      </Typography>
      <Link variant="body2" color="background.paper">
        Métodos de Pago
      </Link>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Servicios
      </Link>
      <Link variant="body2" sx={{ color: "background.paper" }}>
        Testimonios
      </Link>
    </Stack>
  );

  const ContactanosInfo = (
    <Stack spacing={1}>
      <Typography variant="h6" color="background.paper">
        Contactanos
      </Typography>
      <Link variant="body2" color="background.paper">
        116-123-4567
      </Link>
      <Link variant="body2" color="background.paper">
        pandapay@gmail.com
      </Link>
    </Stack>
  );

  return (
    <Grid
      container
      sx={{
        mt: DEFAULT_MARGIN_TOP,
        px: { xs: 5, md: 8, lg: 13, xl: 15 },
        pt: { xs: 5, lg: 8 },
        pb: 3,
        bgcolor: "primary.main",
        borderRadius: "0px 20px 0px 0px",
      }}
      component="footer"
      columnSpacing={4}
    >
      <Grid item xs={12} md={6} lg={4} p={2}>
        <Stack spacing={1}>
          {PandaPayLogo}
          {Texto}
          <RedesSociales color="background.paper" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={3} p={2}>
        {CompaniaInfo}
      </Grid>
      <Grid item xs={12} md={6} lg={3} p={2}>
        {ContactanosInfo}
      </Grid>
      <Grid item xs={12} mt={2}>
        <Typography
          variant="body2"
          color="background.paper"
          sx={{
            mt: 1,
            pt: 1,
            borderTop: (theme) => `2px solid ${theme.palette.background.paper}`,
            textAlign: "center",
          }}
        >
          Copyright @ 2024 PandaPay. Todos los Derechos Reservados.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterSection;
