import {
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "common/assets/Transacciones/Image.jpg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import Section from "common/components/Section";
import { DEFAULT_MARGIN_TOP } from "common/constants";
import useMotionValue from "common/hooks/useMotionValue";
import { motion } from "framer-motion";

const AnimatedPaper = motion(Paper);

const SECTIONS = [
  { id: 1, title: "Años de Experiencia" },
  { id: 2, title: "Clientes Satisfechos" },
  { id: 3, title: "Transacciones Efectivas" },
];

const TransaccionesSection = () => {
  const value1 = useMotionValue({ value: 30 });
  const value2 = useMotionValue({ value: 50 });
  const value3 = useMotionValue({ value: 50000 });

  const theme = useTheme();
  const isSmDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section id="Transacciones" sx={{ mt: { xs: 0, md: DEFAULT_MARGIN_TOP } }}>
      <Grid
        container
        justifyContent="space-evenly"
        p={2}
        sx={{ height: 1, width: 1 }}
      >
        <Grid item xs={12} sm={8} md={5}>
          <Stack spacing={3}>
            <AnimatedTitle
              text="Transacciones Fáciles en Cualquier Lugar, en Todo Momento"
              primaryWord="Transacciones Fáciles"
            />
            <AnimatedSubtitle
              text="Explora cómo PandaPay te brinda soluciones únicas y altamente
              efectivas para alcanzar con éxito los objetivos comerciales de tu
              empresa. Con nuestra experiencia y compromiso, estamos aquí para
              impulsar tu crecimiento y facilitar tus transacciones financieras
              en todo lugar y en todo momento."
              color="text.disabled"
            />
            <Grid container justifyContent="center" alignItems="center">
              {SECTIONS.map((section, index) => (
                <Grid
                  key={index}
                  item
                  xs={10}
                  sm={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <AnimatedPaper
                    key={section.id}
                    sx={{
                      height: 120,
                      width: 150,
                      p: 2,
                      m: 1,
                    }}
                    elevation={4}
                    initial={{ opacity: 0, bottom: 10 }}
                    whileInView={{ opacity: 1, bottom: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Stack spacing={0.5}>
                      <Typography
                        color="primary.main"
                        fontWeight="bolder"
                        textAlign="center"
                        fontSize="1.4rem"
                      >
                        <motion.p style={{ margin: 0 }}>
                          {index === 0
                            ? value1
                            : index === 1
                            ? value2
                            : index === 2
                            ? value3
                            : null}
                        </motion.p>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.disabled"
                        fontSize=".9rem"
                        textAlign="center"
                      >
                        {section.title}
                      </Typography>
                    </Stack>
                  </AnimatedPaper>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
        {!isSmDevice && (
          <Grid item xs={12} sm={8} md={5} lg={5} px={2}>
            <AnimatedPaper
              initial={{ opacity: 0, bottom: 10 }}
              whileInView={{ opacity: 1, bottom: 0 }}
              transition={{ delay: 0.2 }}
              elevation={4}
              sx={{
                height: 1,
                maxHeight: 600,
                width: 1,
                maxWidth: 420,
                borderRadius: "20px 20px 50% 50%",
                outlineColor: (theme) => theme.palette.primary.main,
                outlineWidth: 2.5,
                outlineStyle: "dashed",
                outlineOffset: 10,
                margin: "0 auto",
                background: `url(${Image}) no-repeat`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Section>
  );
};

export default TransaccionesSection;
