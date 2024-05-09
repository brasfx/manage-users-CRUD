import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
  width: '100%',
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}));

export const Input = styled(TextField)(({ theme }) => ({
  maxWidth: '500px',
  width: '100%',
  height: '50px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  height: '53.13px',
  width: '120px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CreateButton = styled(Button)(({ theme }) => ({
  height: '53.13px',
  width: '150px',
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
