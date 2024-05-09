import { CircularProgress } from '@mui/material';
import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <CircularProgress color="info" />
    </Container>
  );
};

export default Loading;
