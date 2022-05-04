import React, {
  useState, FormEvent, useContext, useEffect,
} from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import Button from '../../components/Button';

import { Container, Logo, StyledInput } from './styles';

export function Home() {
  const [username, setUsername] = useState('');
  const {
    searchUser, setUserInfo, loading,
  } = useContext(SearchContext);

  useEffect(() => {
    setUserInfo(undefined);
    setUsername('');
  }, []);

  function findUser(event: FormEvent) {
    event.preventDefault();
    setUserInfo(undefined);

    if (username.trim() === '') {
      return;
    }

    searchUser(username);
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={findUser}>
        <StyledInput
          type="text"
          placeholder="Digite o nome de usuário"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <Button type="submit">
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </form>
    </Container>
  );
}
