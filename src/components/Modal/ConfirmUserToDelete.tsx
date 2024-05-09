import { FC } from 'react';

import { BoxActions, BoxContent, Container, CustomModal } from './styles';
import { Button, Fade, Typography } from '@mui/material';

interface ConfirmUserToConfirmUserToDeleteProps {
  open: boolean;
  userName: string;
  handleClose: () => void;
  handleConfirm: () => void;
}

export const ConfirmUserToDelete: FC<ConfirmUserToConfirmUserToDeleteProps> = ({
  open,
  handleClose,
  handleConfirm,
  userName,
}) => {
  return (
    <Container>
      <CustomModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableAutoFocus
        disableEnforceFocus
      >
        <Fade in={open}>
          <BoxContent>
            <Typography
              id="transition-modal-title"
              variant="h2"
              component="h2"
              textAlign="center"
            >
              Você realmente deseja excluir {userName}
            </Typography>
            <BoxActions>
              <Button variant="contained" color="info" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleConfirm}
              >
                Excluir
              </Button>
            </BoxActions>
          </BoxContent>
        </Fade>
      </CustomModal>
    </Container>
  );
};
