/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './contexts/SearchContext';
import { Home } from './pages/Home';
import { UserInfo } from './pages/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserInfo" element={<UserInfo />} />
        </Routes>
      </SearchContextProvider>
    </BrowserRouter>
  );
}

export default App;
