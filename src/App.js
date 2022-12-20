import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Profile from './components/Profile';
import Inventory from './components/Inventory';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

// export default App;
