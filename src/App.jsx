import { useState } from 'react'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/banner';
import CountryDropdown from './components/countryDropdown';
import Header from './components/header';
import House from './components/house';
import PriceDropdown from './components/priceDropdown';
import PropertyDropdown from './components/propertyDropdown';
import Search from './components/search';
import Footer from './components/footer';

// importing page folder
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';


function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App;
