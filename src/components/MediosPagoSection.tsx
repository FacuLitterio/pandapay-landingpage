/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Paper, Stack } from "@mui/material";
import { DEFAULT_ELEVATION, MEDIOS_DE_PAGO_LOGOS } from "common/constants";

// @ts-expect-error
import Slider from "react-infinite-logo-slider";

const MediosPagoSection = () => {
  return (
    <Stack spacing={2} sx={{ py: 2, boxShadow: (theme) => theme.shadows[3] }}>
      <Slider duration={20}>
        {MEDIOS_DE_PAGO_LOGOS.map((src) => (
          <Slider.Slide key={src}>
            <Paper
              elevation={DEFAULT_ELEVATION}
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
