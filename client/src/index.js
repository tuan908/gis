import 'antd/dist/antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Login } from './auth/Login';
import Profile from './auth/Profile';
import { Register } from './auth/Register';
import BuildingInfo from './BuildingInfo';
import Home from './Home';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":name" element={<BuildingInfo />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
