// Footer.js
import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" py={3}>
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Mazalli Attires. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" align="center">
          Desenvolvido por <Link href="https://seusite.com" underline="hover" color="inherit">Kaue Mazalli</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
