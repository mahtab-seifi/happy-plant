import React, { Component } from 'react';
import Header from './component/header';
import FisrtMain from './component/main';
import SecondMain from './component/secondMain';
import Footer from './component/footer';
import NavTwo from './component/navTwo';

function Home() {
    return ( <>
   <NavTwo/> 
    <Header/>
    <FisrtMain/>
    <SecondMain/>
    <Footer/>
    </> );
}

export default Home;