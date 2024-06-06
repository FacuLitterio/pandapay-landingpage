import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import AnimatedTitle from "common/components/AnimatedTitle";
import Section from "common/components/Section";
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
    title: "¿Quiénes somos?",
    details:
      "Somos una Fintech Argentina con alcance internacional en Latinoamérica, con más de veinte años dedicados a las transacciones digitales. En el mercado local, nos hemos posicionado como líderes en la provisión de servicios de pago.",
  },
  {
    id: "panel2",
    title: "¿Qué ofrecemos?",
    details:
      "Ofrecemos una amplia gama de métodos de pago, tanto presenciales como remotos, utilizando tarjetas de crédito, débito, códigos QR y transferencias. Además, brindamos una plataforma virtual multifuncional.",
  },
  {
    id: "panel3",
    title: "¿Qué es una cuenta remunerada?",
    details:
      "Es una cuenta que permite obtener rendimientos diarios. No se trata de una cuenta bancaria convencional.",
  },
  {
    id: "panel4",
    title: "¿Cómo funciona una cuenta remunerada?",
    details:
      "El saldo de la cuenta se invierte en cuotapartes de un FCI, y los resultados de los activos en los que invierte el FCI generan rendimientos para el titular de la cuenta.",
  },
  {
    id: "panel5",
    title: "¿Cómo puedo acceder a mi cuenta virtual?",
    details:
      "Puedes acceder a tu cuenta desde cualquier dispositivo con conexión a internet, ya sea una computadora o un teléfono móvil, y gestionar tus transacciones de manera sencilla y cómoda.",
  },
  {
    id: "panel6",
    title: "¿Qué soporte técnico ofrecen?",
    details:
      "Nuestro equipo de soporte está disponible todos los días de la semana para resolver cualquier duda o inconveniente, garantizando un servicio continuo y eficiente.",
  },
];
const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Section id="FAQ">
      <Grid container spacing={5} p={2} justifyContent="center">
        <Grid item>
          <AnimatedTitle
            sx={{ maxWidth: 350 }}
            text="Preguntas Frecuentes"
            primaryWord=""
          />
        </Grid>
        <Grid item xs={12} md={10}>
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
                <Typography>{pregunta.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: grey[50] }}>
                <Typography paragraph variant="body2">
                  {pregunta.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

export default FAQSection;
