import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import ProductDetail from './ProductDetail';
function App() {
  return (
    <div>
         <Nav/>
         <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/viewproduct" element={<ProductDetail />}/>

          </Routes>
        </BrowserRouter>
         <Footer/>
    </div>
  )
}

export default App