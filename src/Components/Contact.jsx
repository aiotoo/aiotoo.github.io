import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  MessageSquare,
  Globe,
  Building,
  Users,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";
import Container from "./Container";
import { colors, gradients } from "../constants/colors";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import BackgroundIconRenderer from "../utils/BackgroundIconRenderer";

// Fix for Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  const [mapReady, setMapReady] = useState(false);

  // Contact information
  const contactInfo = {
    company: "ClodPi Labs (India) Private Limited",
    address:
      "749/1, 2nd floor, Swastik Towers, Sri Chamundeshwari layout, Bettadasanapura main road, Electronics City Phase 1, Bengaluru, Karnataka 560100",
    coordinates: [12.8381, 77.6775],
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
      hr: "hr@clodpi.io",
      support: "support@clodpi.io",
    },
    phones: ["+91 80 1234 5678", "+91 98765 43210"],
    businessHours: {
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      weekend: "Saturday: 10:00 AM - 4:00 PM",
      closed: "Sunday: Closed",
    },
    googleMapsUrl: "https://maps.app.goo.gl/RMJx13jdicMFX4ts6",
  };

  useEffect(() => {
    setMapReady(true);
  }, []);

  const handleGetDirections = () => {
    window.open(contactInfo.googleMapsUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 md:py-24 overflow-hidden flex items-center"
    >
      {/* Enhanced Background with Icons */}
      <div className="absolute inset-0 z-0">
        <BackgroundIconRenderer variant="about" opacity="opacity-5" />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-blue-50/30" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-150 h-150 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>

        <div className="absolute bottom-1/4 -right-20 w-125 h-125 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </div>

        {/* Network lines pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Particle dots */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px rounded-full bg-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          {/* Glass Badge */}
          <div className="inline-block mb-8">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/30 shadow-lg transition-all duration-300 hover:scale-105 group"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <MessageSquare size={18} style={{ color: colors.primary }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.primary }}
              >
                Contact Us
              </span>
              <Globe
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: colors.secondary }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="relative">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{ backgroundImage: gradients.primary }}
              >
                Get In Touch
              </span>
            </span>
            <br />
            <span className="relative">
              <span
                className="relative z-10 text-4xl md:text-5xl lg:text-6xl"
                style={{ color: colors.dark }}
              >
                With ClodPi Labs
              </span>
            </span>
          </h2>

          {/* Glass Description Card */}
          <div className="max-w-5xl mx-auto">
            <div
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: colors.dark }}
              >
                Visit our headquarters in Bangalore or connect with us online.
                We're here to help you with IoT solutions and technical support.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content: Details Left, Map Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            {/* Company Card */}
            <div
              className="rounded-3xl backdrop-blur-xl border border-white/30 p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-center gap-6 mb-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ background: gradients.primary }}
                >
                  <Building size={32} color="white" />
                </div>
                <div>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: colors.dark }}
                  >
                    ClodPi Labs
                  </h3>
                  <p
                    className="text-lg opacity-80"
                    style={{ color: colors.dark }}
                  >
                    (India) Private Limited
                  </p>
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start gap-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-lg"
                    style={{ background: `${colors.primary}20` }}
                  >
                    <MapPin size={24} style={{ color: colors.primary }} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="font-bold text-xl mb-3"
                      style={{ color: colors.dark }}
                    >
                      Address
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-lg"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <Phone size={24} style={{ color: colors.secondary }} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="font-bold text-xl mb-4"
                      style={{ color: colors.dark }}
                    >
                      Phone
                    </h4>
                    <div className="space-y-3">
                      {contactInfo.phones.map((phone, index) => (
                        <div key={index} className="group">
                          <a
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="text-lg font-medium group-hover:text-primary transition-all duration-300 group-hover:underline flex items-center gap-2"
                            style={{ color: colors.dark }}
                          >
                            {phone}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <button
                  onClick={handleGetDirections}
                  className="w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-4 group/btn mt-8"
                  style={{
                    background: gradients.primary,
                    color: "white",
                  }}
                >
                  <MapPin size={22} />
                  <span>Get Directions on Google Maps</span>
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="space-y-8">
            {/* Map Container */}
            <div className="rounded-3xl overflow-hidden backdrop-blur-xl border border-white/30 shadow-2xl h-125">
              {mapReady && (
                <MapContainer
                  center={contactInfo.coordinates}
                  zoom={16}
                  style={{ height: "100%", width: "100%" }}
                  className="rounded-3xl"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={contactInfo.coordinates}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-lg mb-2">ClodPi Labs</h3>
                        <p className="text-sm text-gray-600">
                          {contactInfo.address}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
          </div>
        </div>

        {/* Departments Contact */}
        <div
          className="rounded-3xl overflow-hidden backdrop-blur-2xl p-12 border border-white/30"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="text-center mb-12">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-2xl"
              style={{ background: gradients.secondary }}
            >
              <Users size={32} color="white" />
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: colors.dark }}
            >
              Department Contacts
            </h3>
            <p
              className="text-xl opacity-90 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              Connect with the right team for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sales Department */}
            <div
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${colors.primary}20` }}
              >
                <Briefcase size={28} style={{ color: colors.primary }} />
              </div>
              <h4
                className="font-bold text-xl mb-4"
                style={{ color: colors.dark }}
              >
                Sales & Business
              </h4>
              <p className="text-gray-700 mb-6">
                For product inquiries, pricing, and business partnerships
              </p>
              <a
                href={`mailto:${contactInfo.emails.sales}`}
                className="font-medium hover:underline group/link flex items-center gap-2"
                style={{ color: colors.primary }}
              >
                <span>{contactInfo.emails.sales}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Technical Support */}
            <div
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${colors.secondary}20` }}
              >
                <MessageSquare size={28} style={{ color: colors.secondary }} />
              </div>
              <h4
                className="font-bold text-xl mb-4"
                style={{ color: colors.dark }}
              >
                Technical Support
              </h4>
              <p className="text-gray-700 mb-6">
                For product support, troubleshooting, and technical questions
              </p>
              <a
                href={`mailto:${contactInfo.emails.support}`}
                className="font-medium hover:underline group/link flex items-center gap-2"
                style={{ color: colors.secondary }}
              >
                <span>{contactInfo.emails.support}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>

            {/* General Inquiry */}
            <div
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(16, 185, 129, 0.2)" }}
              >
                <Mail size={28} style={{ color: "#10B981" }} />
              </div>
              <h4
                className="font-bold text-xl mb-4"
                style={{ color: colors.dark }}
              >
                General Inquiry
              </h4>
              <p className="text-gray-700 mb-6">
                For general questions and information about our products
              </p>
              <a
                href={`mailto:${contactInfo.emails.general}`}
                className="font-medium hover:underline group/link flex items-center gap-2"
                style={{ color: "#10B981" }}
              >
                <span>{contactInfo.emails.general}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Careers */}
            <div
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(139, 92, 246, 0.2)" }}
              >
                <Users size={28} style={{ color: "#8B5CF6" }} />
              </div>
              <h4
                className="font-bold text-xl mb-4"
                style={{ color: colors.dark }}
              >
                Careers
              </h4>
              <p className="text-gray-700 mb-6">
                For job opportunities, internships, and HR inquiries
              </p>
              <a
                href={`mailto:${contactInfo.emails.hr}`}
                className="font-medium hover:underline group/link flex items-center gap-2"
                style={{ color: "#8B5CF6" }}
              >
                <span>{contactInfo.emails.hr}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, white 0%, transparent 100%)`,
        }}
      ></div>
    </section>
  );
};

export default Contact;
