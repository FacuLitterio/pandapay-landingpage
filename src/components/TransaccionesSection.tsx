import { Grid, Hidden, Paper, Stack, Typography } from "@mui/material";
import Image from "common/assets/Transacciones/Image.jpg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import ImageContainer from "common/components/ImageContainer";
import Section from "common/components/Section";
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_ELEVATION,
  DEFAULT_MARGIN_TOP,
} from "common/constants";
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

  return (
    <Section id="Transacciones" sx={{ mt: DEFAULT_MARGIN_TOP + 3 }}>
      <Grid
        container
        justifyContent="space-around"
        columnSpacing={5}
        p={2}
        sx={{ height: 1, width: 1 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Stack spacing={3}>
            <AnimatedTitle
              text="Transacciones Fáciles en Cualquier Lugar, en Todo Momento"
              primaryWord="Transacciones Fáciles"
            />
            <AnimatedSubtitle
              text="¡Transforma tu negocio con PandaPay! Nuestras soluciones únicas y altamente efectivas están diseñadas para ayudarte a alcanzar tus objetivos comerciales con éxito. Con nuestra experiencia y dedicación, impulsamos tu crecimiento y hacemos que tus transacciones financieras sean sencillas y seguras, sin importar dónde te encuentres. ¡Confía en PandaPay para llevar tus operaciones al siguiente nivel!"
              color="text.disabled"
            />
            <Grid container justifyContent="center" alignItems="center">
              {SECTIONS.map((section, index) => (
                <Grid
                  key={index}
                  item
                  xs={10}
                  sm={4}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <AnimatedPaper
                    key={section.id}
                    sx={{
                      height: 120,
                      width: 150,
                      p: 2,
                      m: 1,
                      borderRadius: DEFAULT_BORDER_RADIUS,
                    }}
                    elevation={DEFAULT_ELEVATION}
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
        <Hidden mdDown>
          <Grid item md={6} lg={5} px={2}>
            <ImageContainer
              src={Image}
              sx={{
                maxHeight: 450,
                borderRadius: "20px 20px 50% 50%",
              }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Section>
  );
};

export default TransaccionesSection;
