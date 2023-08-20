import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './containers/home/index';
import About from './containers/about/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import Contact from './containers/contact/index';
import NavBar from './components/nav-bar';
import { useState } from 'react';

function App() {
let [zIndex,setZIndex]= useState(true);
const handleChange = () =>{
  console.log(zIndex);
  setZIndex(!zIndex)
}
  return (
    <>
      <div className='App'>
        <NavBar handleChange={handleChange} />
        <div className={`App__main-page-content ${!zIndex?"setIndex":""}`}>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
