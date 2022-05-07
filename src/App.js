import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Visi from "./components/Visi";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Visi />
      <News />
      <Footer />
    </div>
  );
}

export default App;
