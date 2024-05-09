import { FC } from 'react';

import { Container, CreateButton, Input, SearchButton } from './styles';
import { Add, Search } from '@mui/icons-material';

interface SearchAreaProps {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  handleOpenModal: () => void;
}

const SearchArea: FC<SearchAreaProps> = ({
  search,
  handleSearch,
  handleSubmit,
  handleKeyPress,
  handleOpenModal,
}) => {
  const user = localStorage.getItem('login') as string;
  const userIsAdmin = JSON.parse(user)[0].userType === 'ADMIN';

  return (
    <Container>
      <Container>
        <Input
          value={search}
          onChange={handleSearch}
          color="info"
          onKeyUpCapture={handleKeyPress}
          label="Buscar por usuário"
          placeholder="Insira o primeiro nome do usuário"
        />
        <SearchButton
          variant="contained"
          onClick={handleSubmit}
          color="info"
          startIcon={<Search />}
        >
          Buscar
        </SearchButton>
      </Container>
      {userIsAdmin && (
        <CreateButton
          variant="contained"
          onClick={handleOpenModal}
          color="success"
          startIcon={<Add />}
        >
          Cadastrar
        </CreateButton>
      )}
    </Container>
  );
};

export default SearchArea;
