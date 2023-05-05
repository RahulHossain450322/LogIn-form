import {  } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Signup from './Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Home from './Components/HomePage/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App
