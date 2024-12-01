'use client'; 

import React from 'react'
import NavBar from './components/Navbaar/NavBar';
import HeroSec from './components/HeroSec/HeroSec';

import CertifSec from './components/CertifSec/CertifSec';
import { AuthSec } from './components/AuthSec/AuthSec';
import ReqSec from './components/RequestSec/ReqSec';

import CoursesSec from './components/CoursesSec/CoursesSec';


const App = () => (
  <div>
    <NavBar></NavBar>
    <HeroSec></HeroSec>
    <CertifSec></CertifSec>
    <AuthSec></AuthSec>
    <ReqSec></ReqSec>
    <CoursesSec></CoursesSec>
  </div>
    
  
)

export default App