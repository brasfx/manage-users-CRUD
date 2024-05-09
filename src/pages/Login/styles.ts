import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const Root = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  gap: 16px;
  padding: 32px;
  border-radius: 6px;
  box-shadow: -1px -1px 14px 4px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -1px -1px 14px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: -1px -1px 14px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  gap: 32px;
`;

export const SubmitButton = styled(LoadingButton)`
  height: 40px;
  max-width: 300px;
  width: 100%;
  color: ${({ theme }) => theme.palette.common.white};
`;
