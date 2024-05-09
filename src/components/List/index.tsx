import { FC, SetStateAction, useState } from 'react';
import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useSnackbar } from 'notistack';

import { EmptyState, StyledTableCell } from './styles';
import { User } from '@type/user';
import { getCorrectTypeUserLabel } from '@utils/userLabel';
import { Delete, Edit } from '@mui/icons-material';
import { CreateOrUpdateUser } from '@components/Modal/CreateOrUpdateUser';
import { deleteUser } from '@services/api';
import { ConfirmUserToDelete } from '@components/Modal/ConfirmUserToDelete';

interface ListProps {
  data: User[];
  setUsers: (value: SetStateAction<User[]>) => void;
}

const List: FC<ListProps> = ({ data, setUsers }) => {
  const { enqueueSnackbar } = useSnackbar();
  const user = localStorage.getItem('login') as string;
  const userIsAdmin = JSON.parse(user)[0].userType === 'ADMIN';

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [userDataToEdit, setUserDataToEdit] = useState<User>();

  const handleOpenEdit = () => setOpenEdit(true);

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setUserDataToEdit(undefined);
  };

  const handleOpenDelete = () => setOpenDelete(true);

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setUserDataToEdit(undefined);
  };

  const handleDeleteUser = async (id: string) => {
    const usersAfterDelete = data?.filter((user) => user.id !== id) as User[];
    try {
      await deleteUser(id);
      setUsers(usersAfterDelete);
      handleCloseDelete();
      enqueueSnackbar('Usuário excluido com sucesso', {
        autoHideDuration: 3000,
        variant: 'success',
      });
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Erro ao tentar excluir usuário', {
        autoHideDuration: 3000,
        variant: 'error',
      });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: '100%', minWidth: '900px ' }}
        aria-label="list users"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Usuário</StyledTableCell>
            <StyledTableCell>Tipo de usuário</StyledTableCell>
            <StyledTableCell>Usuário ativo</StyledTableCell>
            {userIsAdmin && (
              <StyledTableCell sx={{ textAlign: 'center' }}>
                Ações
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell sx={{ width: '50%' }}>
                  <Typography>
                    {user.name} {user.lastName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {getCorrectTypeUserLabel(user.userType)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{user.active ? 'Sim' : 'Não'}</Typography>
                </TableCell>
                {userIsAdmin && (
                  <TableCell
                    sx={{
                      display: 'flex',
                      gap: '16px',
                      justifyContent: 'end',
                    }}
                  >
                    <Tooltip title="Editar usuário" arrow>
                      <IconButton
                        color="default"
                        onClick={() => {
                          handleOpenEdit();
                          setUserDataToEdit(user);
                        }}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir usuário" arrow>
                      <IconButton
                        color="error"
                        onClick={() => {
                          handleOpenDelete();
                          setUserDataToEdit(user);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {data?.length === 0 && (
        <EmptyState>
          <Typography>
            Não foi encontrado nenhum resultado para sua busca.
          </Typography>
        </EmptyState>
      )}
      {openEdit && (
        <CreateOrUpdateUser
          open={openEdit}
          handleClose={handleCloseEdit}
          isEditing
          userToEdit={userDataToEdit}
          users={data}
          setUsers={setUsers}
        />
      )}
      <ConfirmUserToDelete
        open={openDelete}
        handleClose={handleCloseDelete}
        handleConfirm={() => handleDeleteUser(userDataToEdit?.id as string)}
        userName={userDataToEdit?.name as string}
      />
    </TableContainer>
  );
};

export default List;
