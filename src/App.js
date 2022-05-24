import React from "react";
import Books from "./components/Book";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Partners from "./components/Partners";
import Visi from "./components/Visi";


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Visi />
      <News />
      <Books />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
