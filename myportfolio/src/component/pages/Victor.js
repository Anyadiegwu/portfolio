import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Intro from './intro/Intro';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import IntroText from './intro/IntroText';
import AboutNPg from './aboutMe/AboutNPg';
import AboutBGPg from './aboutMe/AboutBGPg';
import AboutCCPg from './aboutMe/AboutCCPg';
import Projects from './portfolio/Projects';


function Victor() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/aboutme/more' element={<AboutNPg />}></Route>
        <Route path='/aboutme/codecamp' element={<AboutCCPg />}></Route>
        <Route path='/aboutme/genesys' element={<AboutBGPg />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/portfolio/projects' element={<Projects />}></Route>
        <Route path='/contactme' element={<Contact />}></Route>
        <Route path='/intro/profile' element={<IntroText />}></Route>
      </Routes>
    </div>
  )
}

export default Victor