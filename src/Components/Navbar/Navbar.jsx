import React, { useState, useEffect } from "react";
import { Menu, X, Home, UserRound, Package, Cpu, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ClodPiLogo from "../../assets/ClodPi_Logo.png";
import { gradients } from "../../constants/colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Simple nav items
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "About",
      href: "/about-us",
      icon: UserRound,
    },
    {
      name: "Products",
      href: "/productUs",
      icon: Package,
    },
    {
      name: "Solutions",
      href: "/solutions",
      icon: Cpu,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get active section
  const getActiveSection = () => {
    if (location.pathname !== "/") return "";

    const sections = ["about", "products", "solutions", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          return section;
        }
      }
    }
    return "home";
  };

  const activeSection = getActiveSection();

  // Handle hash click
  // Always navigate to home and scroll to section for hash links
  const handleHashClick = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
        setTimeout(() => {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-gray-200"
            : "py-5 bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={ClodPiLogo} alt="ClodPi Labs" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  (item.href === "/" && activeSection === "home") ||
                  (item.href.startsWith("#") &&
                    activeSection === item.href.substring(1)) ||
                  item.href === location.pathname;

                return (
                  <div key={item.name} className="relative">
                    {item.href.startsWith("#") ? (
                      <button
                        onClick={() => handleHashClick(item.href)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                      >
                        <item.icon size={18} />
                        <span>{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon size={18} />
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {/* Active background */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{ background: gradients.primary }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-3 mb-10"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={ClodPiLogo}
                  alt="ClodPi Labs"
                  className="h-12 w-auto"
                />
              </Link>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive =
                    (item.href === "/" && activeSection === "home") ||
                    (item.href.startsWith("#") &&
                      activeSection === item.href.substring(1)) ||
                    item.href === location.pathname;

                  return (
                    <div key={item.name}>
                      {item.href.startsWith("#") ? (
                        <button
                          onClick={() => handleHashClick(item.href)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 w-full text-left ${
                            isActive
                              ? "text-white"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          <item.icon size={20} />
                          <span>{item.name}</span>
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                            isActive
                              ? "text-white"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon size={20} />
                          <span>{item.name}</span>
                        </Link>
                      )}

                      {/* Active background */}
                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-lg -z-10"
                          style={{ background: gradients.primary }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className={`h-20 ${scrolled ? "h-16" : "h-20"}`} />
    </>
  );
};

export default Navbar;
