import React, { useContext } from 'react';
import SearchContext from '../../contexts/SearchContext';

export function UserInfo() {
  const { userInfo } = useContext(SearchContext);
  return <p>{userInfo?.name}</p>;
}
