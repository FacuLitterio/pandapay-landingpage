import { Grid, Paper, Stack } from "@mui/material";
import Image2 from "common/assets/Legales/BCRA_logo.png";
import Image3 from "common/assets/Legales/ISO.png";
import Image1 from "common/assets/Legales/PCI.png";
import AnimatedTitle from "common/components/AnimatedTitle";
import Section from "common/components/Section";
import { DEFAULT_ELEVATION } from "common/constants";

const IMAGES = [Image1, Image2, Image3];

const CertificacionesSection = () => {
  return (
    <Section>
      <Stack spacing={2}>
        <AnimatedTitle
          sx={{ maxWidth: 550 }}
          text="Excelencia garantizada a través de procedimientos y
          homologaciones"
          variant="h4"
          color="text.secondary"
          primaryWord="Excelencia"
        />
        <Grid container spacing={2}>
          {IMAGES.map((url) => (
            <Grid item>
              <Paper elevation={DEFAULT_ELEVATION} sx={{ p: 1 }}>
                <img src={url} height="80px" width="100px" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
};

export default CertificacionesSection;
