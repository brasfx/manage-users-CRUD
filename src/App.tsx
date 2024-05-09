import Routes from '@routes/index';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@theme/index';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Routes />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
