import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import SignUp from './pages/user/Signup';
import Login from './pages/user/Login';
import Home from './pages/user/home';
import Admin from './pages/admin/admin';
import Account from './pages/Account';
import PlanTrip from './pages/PlanTrip';
import Place from './pages/user/Place';



// Custom component to validate admin access
const AdminRouteGuard = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user && user.isAdmin) {
    return <Admin />;
  } else {
    // Redirect to homepage or any other page
    return <Navigate to="/home" />;
  }
};



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/admin/*" element={<AdminRouteGuard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/place/:placeid" element={<Place />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
