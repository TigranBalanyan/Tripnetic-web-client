import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login'
import HomePage from "./components/HomePage"
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar';

function App() {


  return (
    <Navbar></Navbar>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/registration" element={<Registration />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
