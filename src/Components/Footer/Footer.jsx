import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  RadioTower,
  Wifi,
  Globe,
  Mail,
  Phone,
  MapPin,
  Cpu,
  Zap,
  Shield,
  ChevronRight,
} from "lucide-react";
import Container from "../../utils/Container";
import { colors, gradients } from "../../constants/colors";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Footer sections
  const footerSections = {
    Company: [
      { name: "About Us", href: "/about-us" },
      { name: "Solutions", href: "/solutions" },
      { name: "Contact", href: "/contact" },
    ],
    Products: [
      { name: "LoRaWAN Gateways", href: "/products?category=gateway" },
      { name: "Helium Hotspots", href: "/products?category=hotspot" },
      { name: "IoT Sensors", href: "/products?category=sensor" },
      { name: "Industrial Adapters", href: "/products?category=adapter" },
      { name: "Smart Controllers", href: "/products?category=controller" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Support", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Compliance", href: "/compliance" },
    ],
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "meetus@clodpi.io",
      href: "mailto:meetus@clodpi.io",
    },
    {
      icon: <Phone size={16} />,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: <MapPin size={16} />,
      text: "Bangalore, Karnataka 560100",
      href: "https://maps.google.com",
    },
  ];

  // Social links
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/clodpi-labs/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/clodpilabs",
      label: "Twitter",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/clodpilabs",
      label: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/clodpilabs/",
      label: "Instagram",
    },
  ];

  const techStack = [
    { icon: <RadioTower size={18} />, name: "LoRaWAN" },
    { icon: <Wifi size={18} />, name: "WiFi" },
    { icon: <Globe size={18} />, name: "LTE" },
    { icon: <Cpu size={18} />, name: "Zigbee" },
    { icon: <Zap size={18} />, name: "BLE" },
    { icon: <Shield size={18} />, name: "Security" },
  ];

  return (
    <footer className="relative overflow-hidden pt-16 pb-8">
      {/* Background with gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, ${colors.dark} 0%, #111827 100%)`,
        }}
      ></div>

      {/* Animated network pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, ${colors.primary}20 2%, transparent 0%),
              radial-gradient(circle at 75% 75%, ${colors.secondary}20 2%, transparent 0%),
              linear-gradient(45deg, transparent 49%, ${colors.accent}10 49%, ${colors.accent}10 51%, transparent 51%)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Section - 5 columns */}
          <div className="lg:col-span-5">
            {/* Brand Logo & Tagline */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: gradients.primary }}
                >
                  <RadioTower size={24} color="white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">ClodPi Labs</h2>
                  <p
                    className="text-sm opacity-70"
                    style={{ color: colors.accent }}
                  >
                    IoT Connectivity Solutions
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-sm">
                Powering India's IoT revolution with indigenous LoRaWAN hardware
                and cutting-edge connectivity solutions. We enable smart cities,
                industries, and businesses with reliable IoT infrastructure.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                Get in Touch
              </h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                Technologies We Work With
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div style={{ color: colors.primary }}>{tech.icon}</div>
                    <span className="text-xs text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections - 7 columns total for 4 sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([section, links]) => (
              <div key={section} className="space-y-4">
                <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: colors.primary }}
                  ></div>
                  {section}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link, index) => (
                    <li key={index} className="min-h-6">
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="group flex items-start gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                        >
                          <ChevronRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                            style={{ color: colors.primary }}
                          />
                          <span className="group-hover:translate-x-0.5 transition-transform leading-relaxed">
                            {link.name}
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="group flex items-start gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                          target={
                            link.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          <ChevronRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                            style={{ color: colors.primary }}
                          />
                          <span className="group-hover:translate-x-0.5 transition-transform leading-relaxed">
                            {link.name}
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Connect With Us
              </h4>
              <p className="text-gray-300 text-sm">
                Follow our journey in revolutionizing IoT connectivity.
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: `1px solid ${colors.accent}20`,
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-xs mb-1">
                © {new Date().getFullYear()} ClodPi Labs (India) Private
                Limited. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
                Made in India with | ISO Certified
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: `1px solid ${colors.accent}20`,
                color: "white",
              }}
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2 opacity-30">
            <div
              className="w-12 h-px"
              style={{ background: colors.primary }}
            ></div>
            <RadioTower size={14} style={{ color: colors.primary }} />
            <div
              className="w-12 h-px"
              style={{ background: colors.primary }}
            ></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
