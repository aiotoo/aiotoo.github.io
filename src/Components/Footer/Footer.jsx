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
    Products: [
      { name: "LoRaWAN Gateways", href: "#products" },
      { name: "Helium Hotspots", href: "#products" },
      { name: "IoT Sensors", href: "#products" },
      { name: "Industrial Adapters", href: "#products" },
      { name: "Smart Controllers", href: "#products" },
    ],
    Solutions: [
      { name: "Smart Cities", href: "#solutions" },
      { name: "Industrial IoT", href: "#solutions" },
      { name: "Asset Tracking", href: "#solutions" },
      { name: "Environmental Monitoring", href: "#solutions" },
      { name: "Energy Management", href: "#solutions" },
    ],
    Company: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Partnerships", href: "#partnerships" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Support", href: "#support" },
      { name: "API Reference", href: "#api" },
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
      href: "#contact",
    },
  ];

  // Social links
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  // Tech stack icons
  const techStack = [
    { icon: <RadioTower size={18} />, name: "LoRaWAN" },
    { icon: <Wifi size={18} />, name: "WiFi" },
    { icon: <Globe size={18} />, name: "LTE" },
    { icon: <Cpu size={18} />, name: "Zigbee" },
    { icon: <Zap size={18} />, name: "BLE" },
    { icon: <Shield size={18} />, name: "Security" },
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-10">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - 4 columns */}
          <div className="lg:col-span-4">
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

              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Powering India's IoT revolution with indigenous LoRaWAN hardware
                and cutting-edge connectivity solutions. We enable smart cities,
                industries, and businesses with reliable IoT infrastructure.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-2">
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

          {/* Links Sections - 8 columns total for 4 sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([section, links]) => (
              <div key={section} className="space-y-6">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: colors.primary }}
                  ></div>
                  {section}
                </h3>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: colors.primary }}
                          />
                          <span className="group-hover:translate-x-1 transition-transform">
                            {link.name}
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: colors.primary }}
                          />
                          <span className="group-hover:translate-x-1 transition-transform">
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

        {/* Social & Newsletter */}
        <div
          className="rounded-2xl overflow-hidden mb-2"
          style={{
            background:
              "linear-gradient(135deg, rgba(185, 55, 93, 0.1), rgba(210, 93, 93, 0.05))",
            border: `1px solid ${colors.accent}20`,
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Follow Our Journey
              </h4>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest innovations, case studies, and IoT
                insights.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden"
                    aria-label={social.label}
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

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                IoT Insights Newsletter
              </h4>
              <p className="text-gray-300 mb-6">
                Get the latest IoT trends, case studies, and technical insights
                delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: gradients.primary,
                    color: "white",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} ClodPi Labs (India) Private
                Limited. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
                Made in India with ❤️ | ISO Certified | WPC Approved
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Security",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: `1px solid ${colors.accent}20`,
                color: "white",
              }}
            >
              <span>Back to Top</span>
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-2 flex justify-center">
          <div className="flex items-center gap-2 opacity-50">
            <div
              className="w-16 h-px"
              style={{ background: colors.primary }}
            ></div>
            <RadioTower size={16} style={{ color: colors.primary }} />
            <div
              className="w-16 h-px"
              style={{ background: colors.primary }}
            ></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
