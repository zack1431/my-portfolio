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

function App() {
  let reSize = window.innerWidth;
  console.log(reSize);
  return (
    <>
    
    <BrowserRouter>
      <div className=' p-0'>
        <div className=''>
          <SideBar></SideBar>
        </div>
        <div className="offset-2 col-10 p-0 position-relative">
          <div className=''>

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
