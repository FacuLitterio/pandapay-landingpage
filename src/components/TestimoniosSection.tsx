import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TestimonioImage1 from "common/assets/Testimonios/Testimonio1.png";
import TestimonioImage2 from "common/assets/Testimonios/Testimonio2.png";
import TestimonioImage3 from "common/assets/Testimonios/Testimonio3.png";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import { DEFAULT_BORDER_RADIUS } from "common/constants";
import Carousel from "react-material-ui-carousel";

const TESTIMONIOS = [
  {
    id: 1,
    name: "Zhaotan Wei",
    subtitle: "Wen Supermercados",
    rating: 4,
    url: TestimonioImage1,
    description:
      "❝Desde que comenzamos a utilizar PandaPay, hemos experimentado una notable mejora en la eficiencia de nuestros cobros y transacciones. Su atención personalizada y las soluciones a medida realmente han hecho la diferencia para nuestro negocio.❝",
  },
  {
    id: 2,
    name: "Gao Lin",
    subtitle: "Smart Shop",
    url: TestimonioImage2,
    rating: 5,
    description:
      "❝PandaPay ha simplificado enormemente nuestro proceso de pagos. La facilidad de uso de su plataforma y la seguridad que ofrecen en cada transacción nos han brindado tranquilidad y confianza en nuestro día a día.❝",
  },
  {
    id: 3,
    name: "Inés Rivarola",
    subtitle: "TributeNess",
    rating: 5,
    url: TestimonioImage3,
    description:
      "❝¡Increíble servicio! Siempre que hemos tenido alguna consulta o requerimiento, el equipo de PandaPay ha estado disponible y ha resuelto nuestras inquietudes de manera rápida y eficiente. Definitivamente los recomiendo.❝",
  },
];

const TestimoniosSection = () => {
  const rotateArray = (array: typeof TESTIMONIOS, step: number) => {
    const rotated = [...array];
    for (let i = 0; i < step; i++) {
      rotated.unshift(rotated.pop()!);
    }
    return rotated;
  };

  const theme = useTheme();
  const isXsDevice = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Box
      id="Testimonios"
      sx={{
        width: 0.9,
        bgcolor: "primary.main",
        py: 5,
        mx: "auto",
        borderRadius: DEFAULT_BORDER_RADIUS,
      }}
    >
      <Stack alignItems="center" spacing={8}>
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 500, p: 2 }}>
          <AnimatedTitle
            variant="h4"
            fontSize="1.1rem"
            color="background.paper"
            text="Testimonios de Clientes"
            primaryWord=""
          />
          <AnimatedSubtitle
            paragraph
            fontSize=".9rem"
            textAlign="center"
            color="background.paper"
            text="Explora las experiencias y opiniones de nuestros clientes, quienes
            comparten cómo PandaPay ha transformado y mejorado sus procesos de
            pago y transacciones comerciales."
          />
        </Stack>
        <Box sx={{ width: 1 }}>
          <Carousel animation="fade" autoPlay={true}>
            {TESTIMONIOS.map((_, i) => {
              const rotatedTestimonials = rotateArray(TESTIMONIOS, i);
              return (
                <Grid
                  container
                  sx={{
                    width: 1,
                    px: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {rotatedTestimonials
                    .slice(
                      0,
                      isXsDevice || isSmallScreen ? 1 : isMediumScreen ? 2 : 3
                    )
                    .map((x) => (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Card
                          key={x.id}
                          sx={{ minHeight: 260, maxWidth: 350 }}
                          elevation={3}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                src={x.url}
                                sx={{
                                  height: 60,
                                  width: 60,
                                  bgcolor: "primary.main",
                                }}
                                aria-label="recipe"
                              />
                            }
                            title={
                              <Typography
                                variant="subtitle1"
                                color="text.primary"
                                fontWeight={600}
                              >
                                {x.name}
                              </Typography>
                            }
                            subheader={
                              <Stack>
                                <Typography
                                  variant="subtitle2"
                                  color="text.disabled"
                                >
                                  {x.subtitle}
                                </Typography>
                                <Rating size="small" value={x.rating} />
                              </Stack>
                            }
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              {x.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              );
            })}
          </Carousel>
        </Box>
      </Stack>
    </Box>
  );
};

export default TestimoniosSection;
