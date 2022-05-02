import React, {
  useState, FormEvent, useContext, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';
import Button from '../../components/Button';

export function Home() {
  const [username, setUsername] = useState('');
  const {
    userInfo, searchUser, setUserInfo, loading,
  } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo(undefined);
    setUsername('');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!userInfo) {
      return;
    }

    navigate('/UserInfo');
    // eslint-disable-next-line
  }, [userInfo]);

  function findUser(event: FormEvent) {
    event.preventDefault();
    setUserInfo(undefined);

    if (username.trim() === '') {
      return;
    }

    searchUser(username);
  }

  return (
    <>
      {loading && <p>Buscando usuário...</p>}
      <form onSubmit={findUser}>
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <Button type="submit">
          Buscar
        </Button>
      </form>
    </>
  );
}
