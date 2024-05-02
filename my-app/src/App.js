import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/login'
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


