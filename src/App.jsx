import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Products from "./Components/Products";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About/>
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
