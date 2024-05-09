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
        {/* <Route path='/course11' element={<Course11/>}/> */}
      </Routes>
      <Footer/>
    </Router>
      
      
       
    </>
  )
}

export default App
