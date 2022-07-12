import React from 'react';
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Partners from "../components/Partners";
import Visi from "../components/Visi";
import BackToTopButton from "../components/BackToTopButton";
import Books from "../components/Book";
  
function Home () {
  return (

    <>
        <Navbar />
        <Hero />
        <Visi />
        <News />
        <Books />
        <Partners />
        <BackToTopButton />
        <Footer />
    </>
  )
}
  
export default Home;