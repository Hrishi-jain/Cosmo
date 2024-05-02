import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Product from './components/features/Product'
import Navbar from './components/navbar/Navbar'





function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    </Router>
      
      
       
    </>
  )
}

export default App
