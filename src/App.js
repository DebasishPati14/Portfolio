import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './containers/home/index';
import About from './containers/about/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import Contact from './containers/contact/index';
import Projects from './containers/projects/index';
import NavBar from './components/nav-bar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particleOptions } from "./utils/utility"

function App() {
  let [zIndex, setZIndex] = useState(true);
  const handleChange = () => {
    console.log(zIndex);
    setZIndex(!zIndex)
  }
  const location = useLocation();

  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const renderParticleComponents = location.pathname === "/";

  return (
    <>
      <div className='App'>
        <NavBar handleChange={handleChange} />
        {init && renderParticleComponents && <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
        }
        <div className={`App__main-page-content ${!zIndex ? "setIndex" : ""}`}>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
