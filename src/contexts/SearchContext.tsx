import React, {
  createContext, useState, ReactNode,
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type User = {
  readonly login: string;
  readonly name: string;
  readonly email: string;
  readonly avatar_url: string;
  readonly html_url: string;
  readonly followers: number;
  readonly following: number;
  readonly location: string;
  readonly bio: string;
  readonly repos: Repo[]
}

type Repo = {
  readonly name: string,
  readonly language: string,
  readonly stargazers_count: number,
  readonly html_url: string,
}

type SearchContextProvider = {
  userInfo: User | undefined;
  searchUser: (username: string) => void;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
  loading: boolean;
}

type SearchContextProviderProps = {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextProvider);

export function SearchContextProvider(props: SearchContextProviderProps) {
  const [userInfo, setUserInfo] = useState<User>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { children } = props;

  function searchUser(username: string) {
    setLoading(true);
    axios.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos`),
    ]).then((res) => {
      const resultUser = res[0].data;
      const resultUserRepos = res[1].data;

      if (resultUser) {
        const filteredRepos: Repo[] = [];

        if (resultUserRepos) {
          resultUserRepos.forEach((repo: Repo) => {
            filteredRepos.push({
              name: repo.name,
              language: repo.language,
              stargazers_count: repo.stargazers_count,
              html_url: repo.html_url,
            });
            filteredRepos.sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));
          });
        }

        setUserInfo({
          login: resultUser.login,
          name: resultUser.name,
          email: resultUser.email,
          avatar_url: resultUser.avatar_url,
          html_url: resultUser.html_url,
          followers: resultUser.followers,
          following: resultUser.following,
          location: resultUser.location,
          bio: resultUser.bio,
          repos: filteredRepos,
        });
      }

      setLoading(false);
      navigate(`/UserInfo/${username}`);
    }).catch(() => {
      setLoading(false);
      toast.error('Usuário não encontrado!');
    });
  }

  return (
    <SearchContext.Provider value={{
      userInfo, searchUser, setUserInfo, loading,
    }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
