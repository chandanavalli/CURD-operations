import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Add from './components/Add';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Login from './components/Login'; 
import NoPageFound from './components/NoPageFound';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/user/add" element={<Add />} />
          <Route path="/search" element={<SearchBar />} /> 

          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
