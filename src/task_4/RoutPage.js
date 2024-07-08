import HomePage from './HomePage';
import AboutPage from './AboutPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function RoutPage() {
    return (    
    <BrowserRouter>
        <Routes>
          <Route path="/About" element={<AboutPage />} />
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter> );
}

export default RoutPage;