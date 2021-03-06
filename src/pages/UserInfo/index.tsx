import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchContext from '../../contexts/SearchContext';
import RepoCard from '../../components/RepoCard';

import {
  UserImg,
  Container,
  StyledHeader,
  UserInfoDiv,
  UserImgDiv,
  UserDataDiv,
  BioDiv,
  ReposDiv,
} from './styles';

export function UserInfo() {
  const { userInfo, searchUser } = useContext(SearchContext);
  const { username } = useParams();

  useEffect(() => {
    if (username !== userInfo?.login) {
      searchUser(username as string);
    }
  }, []);

  return (
    <Container>
      <StyledHeader>
        <p><Link to="/">voltar ao início</Link></p>
      </StyledHeader>
      <UserInfoDiv>
        <UserImgDiv>
          <UserImg src={userInfo?.avatar_url} />
        </UserImgDiv>
        <UserDataDiv>
          <h1>{userInfo?.name}</h1>
          <p>{`Email: ${userInfo?.email || 'privado'}`}</p>
          <p>{`Local: ${userInfo?.location || 'não informado'}`}</p>
          <p>{`Seguidores ${userInfo?.followers} • Seguindo ${userInfo?.following}`}</p>
          <BioDiv>
            <p>{`Bio: ${userInfo?.bio || 'não informado'}`}</p>
          </BioDiv>
        </UserDataDiv>
      </UserInfoDiv>
      <h3>{`${userInfo?.repos ? `${userInfo?.repos.length} Repositório(s)` : 'Repositórios'}`}</h3>
      <ReposDiv>
        {(userInfo?.repos.length
          && userInfo?.repos.map((repo) => <RepoCard {...repo} key={repo.html_url} />))
          || <p>Este usuário não possui repositórios públicos.</p>}
      </ReposDiv>
    </Container>
  );
}
