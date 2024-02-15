import { useEffect, useState } from 'react'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Menu } from './Pages/Menu/Menu'


function App() {
  const navigate = useNavigate();
  
    useEffect(() => {
    if (location.pathname !== "/home") {
      navigate("home");
    }
  }, []);
  return (
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

    </Routes>
  )
}

export default App