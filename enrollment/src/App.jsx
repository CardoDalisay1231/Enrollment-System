import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css'
import Login from './Components/Login';
import Register from './Components/Register';
import RegForm from './Components/RegForm';
import RegFormPt2 from './Components/RegFormPt2';
import Dashboard from './Components/Dashboard';





function App() {
  return (
    <Router basename="/Enrollment-System">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/regform" element={<RegForm />} />
        <Route path="/regformpt2" element={<RegFormPt2 />} />
      </Routes>
    </Router>
  );
}

export default App;
