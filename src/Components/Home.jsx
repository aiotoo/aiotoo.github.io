import React from "react";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="relative">
      {/* Global Background for Home Page */}
      <div className="fixed inset-0 z-[-1]">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-blue-50/20" />

        {/* Animated Blue Orbs */}
        <div className="absolute top-20 left-10 w-200 h-200 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"
            style={{ animationDuration: "15s" }}
          />
        </div>

        <div className="absolute bottom-40 right-10 w-600 h-600 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse"
            style={{ animationDuration: "12s", animationDelay: "3s" }}
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 h-400 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-blue-400/5 to-blue-600/5 rounded-full animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "6s" }}
          />
        </div>

        {/* Network Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="global-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#global-grid)" />
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: "#2563EB",
              opacity: Math.random() * 0.1 + 0.05,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Sections with proper spacing */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
