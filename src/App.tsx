import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProfilePage from './components/Profile';


import { isUserAuthenticated } from './utils/helpers';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) navigate('/login');
    if(isUserAuthenticated()) navigate('/dashboard')
  }, [isUserAuthenticated()]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<ProfilePage  />} />
      </Routes>
    </Box>
  );
}

export default App;
