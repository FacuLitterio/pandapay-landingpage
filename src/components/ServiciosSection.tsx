import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import {
  Avatar,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DevicePaymentImage from "common/assets/Servicios/ServiciosMainImage.jpeg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import ImageContainer from "common/components/ImageContainer";
import Section from "common/components/Section";
import { DEFAULT_SPACING } from "common/constants";
import { motion } from "framer-motion";

const SERVICIOS = [
  {
    id: 1,
    title: "Dispositivos de Cobro",
    description:
      "Ofrecemos una amplia gama de dispositivos de cobro, incluyendo SmartPOS, MiniPOS, Tablet, MPOS, Web y App diseñados para adaptarse a las necesidades específicas de tu negocio.",
    icon: <CurrencyExchangeOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 2,
    title: "Cashout en Locales de Cobros",
    description:
      "Permite a tus usuarios realizar retiros de efectivo de forma rápida y segura en locales de cobro de servicios como Pago24. Facilita el acceso a efectivo y mejora la experiencia de tus clientes con nuestras soluciones de cashout confiables.",
    icon: <CreditScoreOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 3,
    title: "Asegurá tus Pagos Electrónicos",
    description:
      "Ofrecemos máxima protección en todas tus operaciones y pagos electrónicos, asegurando la confianza y tranquilidad tanto para ti como para tus clientes.",
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 4,
    title: "Envío y Recepción de Transferencias con CVU",
    description:
      "Facilita el envío y recepción de dinero con CVU, garantizando total seguridad y respaldo legal. Cumplimos con la normativa vigente del Banco Central para que tus transferencias sean rápidas, seguras y confiables.",
    icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 30 }} />,
  },
];

const AnimatedListItem = motion(ListItem);

const ServiciosSection = () => {
  const theme = useTheme();
  const isSmDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Section id="Servicios">
      <Grid container spacing={DEFAULT_SPACING} justifyContent="center" p={2}>
        <Hidden mdDown>
          <Grid
            item
            md={6}
            lg={5}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ImageContainer src={DevicePaymentImage} />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Stack spacing={2}>
            <AnimatedTitle
              sx={{ maxWidth: 350 }}
              text="Servicios de Cobro a tu Medida"
              primaryWord="Servicios"
            />
            <List
              disablePadding
              sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}
            >
              {SERVICIOS.map((servicio, i) => (
                <AnimatedListItem
                  key={servicio.id}
                  sx={{ px: 0 }}
                  initial={{ opacity: 0, left: 10 }}
                  whileInView={{ opacity: 1, left: 0 }}
                  transition={{ delay: 0.15 * i }}
                >
                  <Stack
                    spacing={2}
                    direction={isSmDevice ? "row" : "column"}
                    sx={{
                      textAlign: { xs: "center", md: "initial" },
                      alignItems: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: "background.paper",
                          color: "primary.main",
                          border: (theme) =>
                            `1px solid ${theme.palette.primary.main}`,
                        }}
                      >
                        {servicio.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <AnimatedSubtitle
                          marginBottom={0}
                          text={servicio.title}
                          color="text.primary"
                          fontWeight="bolder"
                        />
                      }
                      secondary={
                        <AnimatedSubtitle
                          text={servicio.description}
                          color="text.disabled"
                        />
                      }
                    />
                  </Stack>
                </AnimatedListItem>
              ))}
            </List>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ServiciosSection;
