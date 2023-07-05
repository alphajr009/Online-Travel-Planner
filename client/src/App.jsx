import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/user/Signup';
import Login from './pages/user/Login';
import Home from './pages/user/Home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
