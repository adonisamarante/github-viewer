/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserInfo } from './pages/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserInfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
