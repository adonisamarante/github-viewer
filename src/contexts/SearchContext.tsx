import React, {
  createContext, useState, ReactNode,
} from 'react';
import axios from 'axios';

type User = {
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  location: string;
  repos: Repo[]
}

type Repo = {
  name: string,
  private: boolean,
  language: string,
  html_url: string,
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
  const { children } = props;

  function searchUser(username: string) {
    const repos: Repo[] = [];
    setLoading(true);
    axios.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos`),
    ]).then((res) => {
      if (res[1].data) {
        res[1].data.map((repo: Repo) => repos.push({
          name: repo.name,
          private: repo.private,
          language: repo.language,
          html_url: repo.html_url,
        }));
      }

      setUserInfo({
        name: res[0].data.name,
        avatar_url: res[0].data.avatar_url,
        html_url: res[0].data.html_url,
        followers: res[0].data.followers,
        following: res[0].data.following,
        location: res[0].data.location,
        repos,
      });

      setLoading(false);
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
