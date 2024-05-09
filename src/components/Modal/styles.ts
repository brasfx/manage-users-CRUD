import { Box, Button, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)`
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.common.black};
`;

export const Content = styled(Box)`
  width: 100%;
  max-width: 700px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 24px;
  border-radius: 6px;
`;

export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: '0 16px';
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const InputBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 32px 0;
`;

export const CustomButton = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  height: 50px;
`;

export const CustomLoadingButton = styled(LoadingButton)`
  color: ${({ theme }) => theme.palette.common.white};
  height: 50px;
`;

export const BoxButtons = styled(Box)`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
`;

export const BoxContent = styled(Box)`
  width: 100%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 24px;
  border-radius: 6px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const BoxActions = styled(Box)`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  padding-top: 30px;
`;
