/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Paper, Stack, Typography } from "@mui/material";
import { MEDIOS_DE_PAGO_LOGOS } from "common/constants";

// @ts-expect-error
import Slider from "react-infinite-logo-slider";

const MediosPagoSection = () => {
  return (
    <Stack spacing={2} sx={{ bgcolor: "primary.main", py: 2 }}>
      <Typography
        textAlign="center"
        component="div"
        color="background.paper"
        sx={{ fontSize: ".9rem" }}
      >
        10+ Formas de Pago para hacer crecer tu negocio
      </Typography>
      <Slider duration={15}>
        {MEDIOS_DE_PAGO_LOGOS.map((src) => (
          <Slider.Slide key={src}>
            <Paper
              elevation={3}
              sx={{
                width: 120,
                py: 1,
                px: 2,
                m: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                objectFit: "contain",
              }}
            >
              <img src={src} style={{ width: 80, height: 50 }} />
            </Paper>
          </Slider.Slide>
        ))}
      </Slider>
    </Stack>
  );
};

export default MediosPagoSection;
