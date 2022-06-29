import React from "react";
import ReactDOM from "react-dom/client"
import Books from "../components/Book";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarLama from "../components/NavbarLama";
import News from "../components/News";
import Partners from "../components/Partners";
import Visi from "../components/Visi";
import BackToTopButton from "../components/BackToTopButton";

function Beranda() {

    return (
      <div>
        <Navbar/>
        <Hero />
        <Visi />
        <News />
        <Books />
        <Partners />
        <BackToTopButton />
        <Footer />
      </div>
    )
  }

export default Beranda