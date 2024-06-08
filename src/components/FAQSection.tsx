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
import { FAQ_PREGUNTAS_FRECUENTES } from "common/constants";
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
            primaryWord="Preguntas"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          {FAQ_PREGUNTAS_FRECUENTES.map((pregunta) => (
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
