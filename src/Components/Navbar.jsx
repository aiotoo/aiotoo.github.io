import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ClodPiLogo from "../assets/ClodPi_Logo.png";
import { colors } from "../constants/colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Updated nav items without dropdowns
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Support", href: "#support" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-2xl" : "shadow-sm"
      }`}
      style={{
        background: scrolled
          ? `linear-gradient(135deg, ${colors.glass.white}, rgba(255, 255, 255, 0.88))`
          : `linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img
              src={ClodPiLogo}
              alt="ClodPi Labs Logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Desktop Navigation - Clean & Simple */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 group"
                style={{
                  color: colors.dark,
                }}
              >
                <span>{item.name}</span>

                {/* Animated underline */}
                <span
                  className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 w-0 group-hover:w-4/5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.secondary}, transparent)`,
                    boxShadow: `0 0 8px ${colors.secondary}`,
                  }}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Modern Design */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: isOpen ? colors.primary : "transparent",
              color: isOpen ? "white" : colors.primary,
            }}
          >
            <div className="relative">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
              {!isOpen && (
                <span
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: colors.accent }}
                ></span>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Glass Effect Panel */}
        {isOpen && (
          <div
            className="lg:hidden mb-4 rounded-2xl overflow-hidden animate-slideDown"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(25px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              boxShadow: `
                0 20px 60px rgba(13, 27, 57, 0.15),
                inset 0 1px 0 0 rgba(255, 255, 255, 0.8)
              `,
            }}
          >
            <div className="p-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3.5 px-4 rounded-xl font-medium transition-all duration-300 active:scale-[0.98] group"
                  style={{ color: colors.primary }}
                  onClick={() => setIsOpen(false)}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = `${colors.primary}10`;
                  }}
                  onTouchEnd={(e) => {
                    setTimeout(() => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }, 300);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    {/* Optional: Add icons for mobile menu items */}
                    <div
                      className="w-1.5 h-1.5 rounded-full opacity-70 transition-all duration-300 group-hover:scale-125"
                      style={{ backgroundColor: colors.accent }}
                    ></div>
                    <span>{item.name}</span>
                  </div>

                  {/* Mobile menu item indicator */}
                  <div className="ml-7 mt-1 text-xs opacity-40 transition-all duration-300 group-hover:opacity-70">
                    Tap to navigate →
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative footer for mobile menu */}
            <div className="px-4 py-3 border-t border-white/50">
              <div
                className="text-center text-xs font-medium tracking-wider uppercase opacity-50"
                style={{ color: colors.primary }}
              >
                ClodPi Labs © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
