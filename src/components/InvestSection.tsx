import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, Hidden, Paper, Stack, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Image from "common/assets/Investment/investment2.svg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import { DEFAULT_BORDER_RADIUS, DEFAULT_ELEVATION } from "common/constants";
import React, { useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const PREGUNTAS_FRECUENTES = [
  {
    id: "panel1",
    title: "¿Qué es una cuenta remunerada?",
    details:
      "Es tu cuenta que te permite obtener rendimientos diarios. No es una cuenta bancaria.",
  },
  {
    id: "panel2",
    title: "¿Cómo funciona una cuenta remunerada?",
    details:
      "El saldo en la cuenta se invierte en cuotapartes de un FCI y los resultados de los activos en los que invierte el FCI generan rendimiento para vos.",
  },
  {
    id: "panel3",
    title: "¿Qué es un FCI?",
    details:
      "Es un vehículo donde participas junto con otras personas de una herramienta de inversión a través de la cual una Sociedad Gerente profesional y especializada en esta actividad se encarga de administrar el dinero que ingresa para que genere rendimientos.",
  },
  {
    id: "panel4",
    title: "¿La cuenta remunerada es segura?",
    details:
      "El FCI en el que se invierte tu dinero participa de activos de bajo riesgo.",
  },
  {
    id: "panel5",
    title: "¿Para quiénes está disponible la cuenta remunerada?",
    details:
      "Disponible para usuarios desde la app, con tecnología IOS o Android, asegurando una relación comercial autorizada.",
  },
];

const InvestSection = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Paper
      id="Investment"
      elevation={DEFAULT_ELEVATION}
      sx={{
        width: 0.9,
        py: 5,
        px: 2,
        mx: "auto",
        borderRadius: DEFAULT_BORDER_RADIUS,
      }}
    >
      <Stack direction="row" spacing={5}>
        <Hidden mdDown>
          <Box
            sx={{
              width: { md: 0, lg: 0.5 },
              height: 1,
              px: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Image} style={{ transform: "scale(.9)" }} />
          </Box>
        </Hidden>
        <Stack spacing={3} sx={{ maxWidth: 530, px: 2 }}>
          <AnimatedTitle
            variant="h4"
            fontSize="1.1rem"
            color="text.primary"
            text="Invierte y Genera Rendimientos"
            primaryWord="Invierte"
            showDecorationBar={false}
          />
          <AnimatedSubtitle
            paragraph
            fontSize=".9rem"
            color="text.disabled"
            text="Ofrecemos a nuestros clientes la oportunidad de invertir su dinero y obtener rendimientos diarios de manera segura y eficiente. Descubre cómo puedes hacer crecer tu capital con nuestras opciones de inversión."
          />
          <Stack>
            {PREGUNTAS_FRECUENTES.map((pregunta) => (
              <Accordion
                key={pregunta.id}
                expanded={expanded === pregunta.id}
                onChange={handleChange(pregunta.id)}
              >
                <AccordionSummary
                  aria-controls={`${pregunta.id}-content`}
                  id={`${pregunta.id}-header`}
                >
                  <Typography variant="body2">{pregunta.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: grey[50] }}>
                  <Typography paragraph variant="body2">
                    {pregunta.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default InvestSection;
