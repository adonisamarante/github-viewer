import React, {
  createContext, useState, ReactNode,
} from 'react';

type User = {
  name: string;
}

type SearchContextProvider = {
  userInfo: User | undefined;
  searchUser: (username: string) => User | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
}

type SearchContextProviderProps = {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextProvider);

export function SearchContextProvider(props: SearchContextProviderProps) {
  const [userInfo, setUserInfo] = useState<User>();
  const { children } = props;

  function searchUser(username: string) {
    setUserInfo({ name: username });
    return userInfo;
  }

  return (
    <SearchContext.Provider value={{ userInfo, searchUser, setUserInfo }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
