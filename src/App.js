
import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <>
    <Router>
      
       <Routes>
       <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
         
        </Routes>
       

    </Router>
    
    
    </>
  );
}

export default App;
