import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Signup';
import Verification from './components/Verification';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
                  <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
