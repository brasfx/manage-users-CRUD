import { FC, SetStateAction } from 'react';

import {
  Fade,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from '@mui/material';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

import {
  BoxButtons,
  Container,
  Content,
  CustomButton,
  CustomLoadingButton,
  CustomModal,
  Input,
  InputBox,
} from './styles';

import { addUser, updateUser } from '@services/api';
import { User } from '@type/user';

interface CreateOrUpdateUserProps {
  open: boolean;
  handleClose: () => void;
  isEditing?: boolean;
  userToEdit?: User;
  users?: User[];
  setUsers: (value: SetStateAction<User[]>) => void;
}

export const CreateOrUpdateUser: FC<CreateOrUpdateUserProps> = ({
  open,
  handleClose,
  isEditing,
  userToEdit,
  setUsers,
  users,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    active: isEditing ? userToEdit?.active : false,
    userType: isEditing ? userToEdit?.userType : 'ADMIN',
    name: isEditing ? userToEdit?.name : '',
    lastName: isEditing ? userToEdit?.lastName : '',
    email: isEditing ? userToEdit?.email : '',
    password: isEditing ? userToEdit?.password : '',
    submit: null,
  };

  const handleCreateUser = async (values: any, resetForm: any) => {
    try {
      const response = await addUser(values);
      setUsers((prev: any) => [...prev, response]);
      resetForm();
      handleClose();
      enqueueSnackbar('Usuário criado com sucesso!', {
        autoHideDuration: 3000,
        variant: 'success',
      });
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Erro ao tentar criar usuário', {
        autoHideDuration: 3000,
        variant: 'error',
      });
    }
  };

  const handleUpdateUser = async (values: any, resetForm: any) => {
    const { name, lastName, email, password, active, userType } = values;
    let allUsers = users?.map((user) => {
      return user.id === userToEdit?.id
        ? {
            id: userToEdit.id,
            name,
            lastName,
            email,
            password,
            active,
            userType,
          }
        : user;
    }) as User[];
    try {
      await updateUser(userToEdit?.id as string, values);
      resetForm();
      handleClose();
      setUsers(allUsers);
      enqueueSnackbar('Usuário atualizado com sucesso!', {
        autoHideDuration: 3000,
        variant: 'success',
      });
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Erro ao tentar atualizar usuário', {
        autoHideDuration: 3000,
        variant: 'error',
      });
    }
  };

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
          <Content>
            <Typography id="transition-modal-title" variant="h2" component="h2">
              Cadastrar usuário
            </Typography>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .max(50)
                  .required('Nome é um campo obrigatório'),
                lastName: Yup.string()
                  .max(100)
                  .required('Sobrenome é um campo obrigatório'),
                email: Yup.string()
                  .email('Insira um email válido')
                  .max(255)
                  .required('Email é um campo obrigatório'),
                password: Yup.string()
                  .max(255)
                  .required('Senha é um campo obrigatório'),
              })}
              onSubmit={async (
                values,
                { setSubmitting, setErrors, setStatus, resetForm },
              ) => {
                try {
                  isEditing
                    ? await handleUpdateUser(values, resetForm)
                    : await handleCreateUser(values, resetForm);
                  setStatus({ success: true });
                  setSubmitting(false);
                } catch (error: any) {
                  setStatus({ success: false });
                  setErrors({ submit: error.message });
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormControlLabel
                    name="active"
                    control={
                      <Switch
                        checked={values.active}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="info"
                      />
                    }
                    label="Usuário ativo"
                  />
                  <Typography id="transition-modal-description" variant="body2">
                    Tipo de usuário
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="userType"
                      value={values.userType}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="ADMIN"
                        control={<Radio color="info" />}
                        label="Administrador"
                      />
                      <FormControlLabel
                        value="USER"
                        control={<Radio color="info" />}
                        label="Usuário Padrão"
                      />
                    </RadioGroup>
                  </FormControl>

                  <InputBox>
                    <Input
                      id="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      inputProps={{ maxLength: 50 }}
                      variant="outlined"
                      label="Nome"
                      placeholder="Insira o nome do usuário"
                      color="info"
                    />
                    <Input
                      id="lastName"
                      required
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      inputProps={{ maxLength: 100 }}
                      variant="outlined"
                      label="Sobrenome"
                      placeholder="Insira o sobrenome do usuário"
                      color="info"
                    />
                    <Input
                      id="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      inputProps={{ maxLength: 255 }}
                      variant="outlined"
                      label="Email"
                      placeholder="Insira o email do usuário"
                      color="info"
                    />
                    <Input
                      id="password"
                      required
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      inputProps={{ maxLength: 255 }}
                      variant="outlined"
                      label="Senha"
                      placeholder="Insira a senha do usuário"
                      color="info"
                    />
                  </InputBox>
                  <BoxButtons>
                    <CustomButton
                      onClick={handleClose}
                      variant="contained"
                      color="error"
                      disabled={isSubmitting}
                    >
                      Cancelar
                    </CustomButton>
                    <CustomLoadingButton
                      loading={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="success"
                      disabled={isSubmitting || !isValid}
                    >
                      {isEditing ? 'Editar' : 'Cadastrar'}
                    </CustomLoadingButton>
                  </BoxButtons>
                </form>
              )}
            </Formik>
          </Content>
        </Fade>
      </CustomModal>
    </Container>
  );
};
