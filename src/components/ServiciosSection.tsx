import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DevicePaymentImage from "common/assets/Servicios/Image.jpg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import Section from "common/components/Section";
import { DEFAULT_SPACING } from "common/constants";
import { motion } from "framer-motion";

const AnimatedPaper = motion(Paper);

const SERVICIOS = [
  {
    id: 1,
    title: "Dispositivos de Cobro",
    description:
      "Brindamos diversos dispositivos de cobro como SmartPOS, MiniPOS, Tablet, MPOS, Web y App.",
    icon: <CurrencyExchangeOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 2,
    title: "Cashout en Locales de Cobros",
    description:
      "Permite a tus usuarios realizar retiros de efectivo en locales de cobros de servicios como Pago24 de manera rápida y segura.",
    icon: <CreditScoreOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 3,
    title: "Asegurá tus Pagos Electrónicos",
    description:
      "Ofrecemos seguridad total en todas tus transacciones y pagos electrónicos.",
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 4,
    title: "Envío y Recepción de Transferencias con CVU",
    description:
      "Permite el envío y recepción de transferencias de dinero a través de CVU con total seguridad y respaldo legal, conforme a la normativa vigente del Banco Central.",
    icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 30 }} />,
  },
];

const AnimatedListItem = motion(ListItem);

const ServiciosSection = () => {
  const theme = useTheme();
  const isSmDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Section id="Servicios">
      <Grid
        container
        spacing={DEFAULT_SPACING}
        justifyContent="space-evenly"
        p={2}
      >
        {isSmDevice && (
          <Grid item xs={8} md={6} lg={5}>
            <AnimatedPaper
              initial={{ opacity: 0, bottom: 10 }}
              whileInView={{ opacity: 1, bottom: 0 }}
              transition={{ delay: 0.2 }}
              elevation={4}
              sx={{
                height: 1,
                maxHeight: 520,
                width: 1,
                maxWidth: 450,
                borderRadius: 20,
                outlineColor: (theme) => theme.palette.primary.main,
                outlineWidth: 2.5,
                outlineStyle: "dashed",
                outlineOffset: 10,
                margin: "0 auto",
                background: `url(${DevicePaymentImage}) no-repeat`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </Grid>
        )}

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
