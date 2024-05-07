import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Product from './components/features/Product'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import AboutUs from './components/about/About'





function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </Router>
      
      
       
    </>
  )
}

export default App
