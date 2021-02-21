import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import AuthProvider from './components/context/AuthContext';

const RouteConfig = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default RouteConfig;
