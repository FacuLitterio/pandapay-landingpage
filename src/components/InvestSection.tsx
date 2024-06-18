import { Close } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  Box,
  Button,
  Divider,
  Hidden,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Image from "common/assets/Investment/investment1.svg";
import AnimatedSubtitle from "common/components/AnimatedSubtitle";
import AnimatedTitle from "common/components/AnimatedTitle";
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_ELEVATION,
  INVEST_PREGUNTAS_FRECUENTES,
} from "common/constants";
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
    expandIcon={<ArrowForwardIosSharpIcon fontSize="small" />}
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

const InvestSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Paper
        id="Invierte"
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
              {INVEST_PREGUNTAS_FRECUENTES.slice(0, 5).map((pregunta) => (
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
            <Stack direction="row" justifyContent="flex-end">
              <Button
                variant="text"
                endIcon={<ArrowForwardIcon />}
                onClick={handleModalOpen}
              >
                Ver Todas
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: 800,
            height: "100%",
            maxHeight: 500,
            overflowY: "scroll",
            bgcolor: "background.paper",
            borderRadius: DEFAULT_BORDER_RADIUS,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="h6"
              id="modal-title"
              gutterBottom
              fontWeight={600}
            >
              Inversiones - Preguntas Frecuentes
            </Typography>
            <IconButton onClick={handleModalClose}>
              <Close />
            </IconButton>
          </Stack>

          <Divider variant="fullWidth" />
          <Box sx={{ mt: 2, overflow: "auto" }}>
            {INVEST_PREGUNTAS_FRECUENTES.map((pregunta) => (
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
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default InvestSection;
