import { useEffect } from 'react';
import UpdateElectron from '@/components/update';
import logoVite from './assets/logo-vite.svg';
import logoElectron from './assets/logo-electron.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Menu } from './Pages/Menu/Menu';

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (window.location.hash !== '#/home' && window.location.hash !== '') {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      {/* Optional: UpdateElectron component can be included if it's part of your UI */}
      <UpdateElectron />
      <Routes>
          <Route path="/" element={<Home />} /> {/* Adjusted for root path */}
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
