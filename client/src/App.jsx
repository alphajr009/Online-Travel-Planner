import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/user/Signup';
import Login from './pages/user/Login';
import Home from './pages/user/home';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
