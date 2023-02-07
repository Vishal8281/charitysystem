import React from 'react';


import Home from './components/home1'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Thistory from './components/Transactions';
import Dcause from './components/Dcause';
import Login from './components/Login';
import Donate from './components/Donate';

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {



  return (
    

    <BrowserRouter>
    <Routes>
       
        <Route path="home" element={  <ProtectedRoute><Home/></ProtectedRoute>  }/>
        <Route path="history" element={<ProtectedRoute><Thistory /></ProtectedRoute>} />
        <Route path="cause" element={<ProtectedRoute><Dcause/></ProtectedRoute>} />
        <Route path="donate" element={<ProtectedRoute><Donate/></ProtectedRoute>} />
         <Route path="signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
        
    </Routes>
  </BrowserRouter>

  )
}

export default App


