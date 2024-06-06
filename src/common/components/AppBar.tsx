import LoginIcon from "@mui/icons-material/Login";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  LinearProgress,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PANDAPAY_APP_URL } from "constants";
import { useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import PandaPayIcon from "../assets/PandaPay_Logo.png";

const pages = [
  { id: 1, label: "Inicio" },
  { id: 2, label: "Servicios" },
  { id: 3, label: "Testimonios" },
  { id: 4, label: "Contacto" },
];

const AppBar = () => {
  const theme = useTheme();
  const handleClickIniciarSesion = useCallback(() => {
    window.location.href = PANDAPAY_APP_URL;
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(() => {
    scaleX.onChange((v) => setHookedYPosition(v));
  }, [scaleX, scrollYProgress]);

  const isMdDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <MuiAppBar
        position="fixed"
        elevation={3}
        sx={{ bgcolor: "background.paper" }}
      >
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={PandaPayIcon} sx={{ height: 45, width: 45 }} />
            <Typography variant="h6" fontWeight="bold" component="span">
              Panda
              <Typography
                variant="h6"
                component="span"
                fontWeight="bold"
                color="primary.main"
              >
                Pay
              </Typography>
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <Button>{page.label}</Button>
              ))}
            </Stack>
          </Box>
          {isMdDevice ? (
            <IconButton onClick={handleClickIniciarSesion}>
              <LoginIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<LoginIcon />}
                onClick={handleClickIniciarSesion}
              >
                Ingresar
              </Button>
            </Stack>
          )}
        </Toolbar>
        <LinearProgress variant="determinate" value={hookedYPostion * 100} />
      </MuiAppBar>
    </>
  );
};

export default AppBar;
