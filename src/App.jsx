import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/About/AboutUs";
import Home from "./Components/Home/Home";
import ProductUs from "./Components/Product/ProductUs";
import Solutions from "./Components/Solution/Solutions";
import ProductDetails from "./Components/Product/ProductDetails";

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
