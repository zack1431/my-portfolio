// import logo from './logo.svg';

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import SideBar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import Skills from './components/skills';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import {useState,useEffect} from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
  window.addEventListener("load", handleResize)
})
  return (
    <>
    
    <BrowserRouter>
      <div className=' p-0'>
        <div className='menu'>
          <SideBar isMobile={isMobile}></SideBar>
        </div>
        <div className="offset-2 col-md-10 col-xs-12 p-0 position-relative">
          <div className=''>

            <Routes>
              <Route path="/" element={<Home isMobile={isMobile}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
          </div>
          <Footer isMobile={isMobile}></Footer>
        </div>
      </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
