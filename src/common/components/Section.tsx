import { Container, ContainerProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<ContainerProps>;

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <Container
      component="section"
      sx={{
        width: 1,
        p: 3,
        my: { xs: 5, sm: 8, md: 10, xl: 16 },
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Section;
