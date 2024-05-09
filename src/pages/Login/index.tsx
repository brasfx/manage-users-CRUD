import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useSnackbar } from 'notistack';

import { Container, Content, Root, SubmitButton } from './styles';
import { login } from '@services/api';

export const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await login();
      const validateUser = response.find((user: any) => user.email === email);

      if (
        validateUser &&
        validateUser.email === email &&
        validateUser.password === password
      ) {
        navigate('/');

        let login = JSON.parse(localStorage.getItem('login') as any) || [];
        login.push(validateUser);
        localStorage.setItem('login', JSON.stringify(login));
      } else {
        enqueueSnackbar('Suas credenciais estão incorretas.', {
          autoHideDuration: 3000,
          variant: 'error',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Root>
      <Container>
        <Typography variant="h1">Login</Typography>
        <Content>
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            color="info"
            fullWidth
            placeholder="Insira seu email de acesso"
          />
          <TextField
            fullWidth
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Senha"
            placeholder="Insira sua senha de acesso"
            color="info"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton
            type="submit"
            variant="contained"
            color="success"
            onClick={handleLogin}
          >
            Entrar
          </SubmitButton>
        </Content>
      </Container>
    </Root>
  );
};
