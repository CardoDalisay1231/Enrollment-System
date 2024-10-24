import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import RegForm from './Components/RegForm';
import RegFormPt2 from './Components/RegFormPt2';
import Apps from './Apps';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/regform" element={<RegForm />} />
        <Route path="/regformpt2" element={<RegFormPt2 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
