/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './contexts/SearchContext';
import { ToastContainer } from 'react-toastify';
import { Home } from './pages/Home';
import { UserInfo } from './pages/UserInfo';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />

      <BrowserRouter>
        <SearchContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserInfo/:username" element={<UserInfo />} />
          </Routes>
        </SearchContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
