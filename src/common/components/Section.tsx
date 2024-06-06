import { Container, ContainerProps } from "@mui/material";
import { DEFAULT_MARGIN_TOP } from "common/constants";
import React, { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<ContainerProps>;

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <Container
      component="section"
      sx={{ width: 1, p: 3, mt: { xs: 6, lg: DEFAULT_MARGIN_TOP } }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Section;
