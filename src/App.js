import React from "react";
import Books from "./components/Book";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavbarLama from "./components/NavbarLama";
import News from "./components/News";
import Partners from "./components/Partners";
import Visi from "./components/Visi";
import BackToTopButton from "./components/BackToTopButton";
import Home from './pages';
import About from './pages/About';
import Our_Program from './pages/Our_Program';
import Beranda from './pages'
import { Router, Route } from 'react-router-dom'

function App() {

  return (
      <>
          <Navbar/>
          <Hero />
          <Visi />
          <News />
          <Books />
          <Partners />
          <BackToTopButton />
          <Footer />
      </>
  );
}

export default App;
