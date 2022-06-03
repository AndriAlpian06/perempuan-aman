import React from "react";
import Books from "./components/Book";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavbarCoba2 from "./components/NavbarCoba2";
import NavbarLama from "./components/NavbarLama";
import News from "./components/News";
import Partners from "./components/Partners";
import Visi from "./components/Visi";
import BackToTopButton from "./components/BackToTopButton";


function App() {

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
  );
}

export default App;
