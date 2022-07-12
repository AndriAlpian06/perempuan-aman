import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Our_Program from './pages/Our_Program';
import Error from "./pages/Error";
import { 
  BrowserRouter as Router,
  Routes, 
  Route } from 'react-router-dom'


function App() {

  return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="our_program" element={<Our_Program />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        
  );
}

export default App;
