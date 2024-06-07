import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Grid,
  Hidden,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ContactImage from "common/assets/Contacto/ContactImage.svg";
import AnimationLottie from "common/assets/Contacto/Singing Contract.json";
import Section from "common/components/Section";
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_ELEVATION,
  DEFAULT_SPACING,
} from "common/constants";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Lottie from "react-lottie";

const ContactoSection = () => {
  return (
    <Section id="Contacto" sx={{ mt: 10 }}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={DEFAULT_SPACING}
      >
        <Hidden mdDown>
          <Grid item xs={5}>
            <Lottie
              src={ContactImage}
              style={{ transform: "scale(1.2)" }}
              options={{
                loop: true,
                autoplay: true,
                animationData: AnimationLottie,
              }}
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={6}>
          <Paper
            elevation={DEFAULT_ELEVATION}
            sx={{ p: 4, borderRadius: DEFAULT_BORDER_RADIUS }}
          >
            <Stack spacing={2}>
              <Typography
                variant="h5"
                color="text.primary"
                textAlign="center"
                fontWeight="bolder"
              >
                ¡Ponete en Contacto!
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                Estamos aquí para responder tus preguntas, brindarte información
                detallada sobre nuestros servicios
              </Typography>
              <Stack width={1} spacing={2}>
                <Stack direction="row" spacing={2}>
                  <TextField label="Nombre" name="nombre" fullWidth />
                  <TextField label="Apellido" name="apellido" fullWidth />
                </Stack>
                <TextField label="Email" />
                <TextField multiline label="Mensaje..." minRows={3} />
                <Stack direction="row" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    size="large"
                  >
                    Enviar
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ContactoSection;
