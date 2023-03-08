import React from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Products';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:productId' element={<Product/>} />

      </Routes>
    </>
  );
}

export default App;
