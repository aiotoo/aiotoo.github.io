// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs"; // New component
import Home from "./Components/Home";
import ProductUs from "./Components/ProductUs";
import Solutions from "./Components/Solutions";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/productUs" element={<ProductUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
