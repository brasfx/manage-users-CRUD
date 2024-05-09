import { Typography } from '@mui/material';
import { Container, RedirectButton } from './styles';

export const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1">Ops! Essa página não existe ainda.</Typography>
      <RedirectButton color="info" variant="contained" href="/">
        Voltar
      </RedirectButton>
    </Container>
  );
};
