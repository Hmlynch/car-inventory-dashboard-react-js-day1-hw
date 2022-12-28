import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import Profile from './components/Profile';
import CarsInventory from './views/CarsInventory';
import CarSingle from './views/CarSingle';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';

export default function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <div className="App">
      <h2>Logged in User: { user.username }</h2>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/carsInventory">Cars Inventory</Link></li>
          {
            (user.loggedIn) ?
            <li><button onClick={logout}>Logout</button></li> :
            <li><button onClick={login}>Login</button></li>
          }
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/carsInventory">
          <Route path=":uid">
            <Route path=":id" element={<CarSingle />} />
          </Route>
          <Route path="" element={<CarsInventory />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

// export default App;
