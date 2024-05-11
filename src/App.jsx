import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Product from './components/features/Product'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import AboutUs from './components/about/About'
import Coures from './components/coures/Coures'
import Course11 from './components/coures/Course11'
import CourseDetail from './components/coures/CourseDetail'
import CheckOut from './components/checkout/CheckOut'
import Cart from './components/cart/Cart'





function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/course' element={<Coures/>}/>
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/course11/:id' element={<Course11/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
      
      
       
    </>
  )
}

export default App
