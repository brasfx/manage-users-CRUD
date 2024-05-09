import { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import { User } from '@type/user';
import { getAllUsers } from '@services/api';
import List from '@components/List';
import TopBar from '@components/Appbar';
import SearchArea from '@components/SearchArea';
import { CreateOrUpdateUser } from '@components/Modal/CreateOrUpdateUser';
import Loading from '@components/Loading';

export const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const listUsers = async () => {
    try {
      const data = await getAllUsers(search);
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    listUsers();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      listUsers();
    }
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      <TopBar />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Content>
            <SearchArea
              search={search}
              handleSearch={handleSearchName}
              handleSubmit={handleSearchSubmit}
              handleKeyPress={handleKeyPress}
              handleOpenModal={handleOpen}
            />
            <List data={users} setUsers={setUsers} />
            {open && (
              <CreateOrUpdateUser
                open={open}
                handleClose={handleClose}
                setUsers={setUsers}
              />
            )}
          </Content>
        )}
      </Container>
    </>
  );
};
