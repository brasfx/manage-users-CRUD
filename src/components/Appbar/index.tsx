import { AppBar, Box, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Logout as Exit } from '@mui/icons-material';

import { Logout } from './styles';

import theme from '@theme/index';
import { CustomAvatar } from '@components/Avatar';

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate('/login');
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.common.black }}
          >
            Gerenciar usuários
          </Typography>
          {!isSmallScreen && <CustomAvatar />}
          <Logout
            onClick={handleLogout}
            variant="contained"
            color="secondary"
            startIcon={<Exit />}
          >
            Sair
          </Logout>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
