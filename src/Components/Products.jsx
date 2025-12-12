import React from "react";
import {
  ExternalLink,
  Wifi,
  RadioTower,
  Home,
  Cpu,
  Battery,
  Droplets,
  Lightbulb,
  Cable,
  Globe,
  ArrowRight,
  Shield,
  Cloud,
} from "lucide-react";
import Container from "./Container";
import { colors } from "../constants/colors";

const Products = () => {

  // Product categories
  const productCategories = [
    {
      id: "lorawan",
      name: "LoRaWAN® Products",
      icon: <RadioTower size={20} />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "helium",
      name: "Helium Compatible",
      icon: <Globe size={20} />,
      color: "bg-green-100 text-green-800",
    },
  ];

  // Main products data
  const lorawanProducts = [
    {
      id: "cphh",
      name: "ClodPi Outdoor Gateway for LoRaWAN®",
      description:
        "Industrial grade enclosure for outdoor applications with rugged design and weatherproof protection.",
      imageUrl: "CPHH.png",
      features: ["Outdoor Rated", "Industrial Grade", "Weatherproof"],
      category: "gateway",
      certification: "WPC Certified",
      icon: <RadioTower className="text-blue-600" size={24} />,
    },
    {
      id: "cpig",
      name: "ClodPi Indoor Gateway for LoRaWAN®",
      description:
        "High-performance indoor gateway for enterprise and industrial LoRaWAN network deployment.",
      imageUrl: "CPIG.png",
      features: ["Enterprise Grade", "High Performance", "Compact Design"],
      category: "gateway",
      certification: "WPC Certified",
      icon: <Wifi className="text-purple-600" size={24} />,
    },
    {
      id: "ha",
      name: "ClodPi ATOM Hub",
      description:
        "For Home Assistant. Supports Zigbee, Thread, Matter, Bluetooth and WiFi connectivity.",
      imageUrl: "HA.png",
      features: ["Multi-Protocol", "Home Assistant", "Smart Home"],
      category: "hub",
      certification: "",
      icon: <Home className="text-orange-600" size={24} />,
    },
    {
      id: "lte",
      name: "Battery-operated LTE Module",
      description:
        "Suitable for Water and Gas meter applications with ultra-low power consumption.",
      imageUrl: "Battery operated LTE Module.jpg",
      features: ["LTE Connectivity", "Low Power", "Meter Applications"],
      category: "module",
      certification: "",
      icon: <Battery className="text-green-600" size={24} />,
    },
    {
      id: "lwcc",
      name: "LoRaWAN® Concentrator Card",
      description:
        "IN865 / US915 certified. WPC, FCC, IC, RCM certified. SX1302 Design in Mini PCIe Form Factor.",
      imageUrl: "LWCC.png",
      features: ["Multi-Certified", "SX1302 Chip", "Mini PCIe"],
      category: "component",
      certification: "WPC, FCC, IC, RCM",
      icon: <Cpu className="text-red-600" size={24} />,
    },
    {
      id: "water-meter",
      name: "Water Meter Reader AMR",
      description:
        "Battery-operated Water Meter reader AMR for Magnetic and Inductive sensors.",
      imageUrl: "ClodPi Water Meter AMR.jpg",
      features: ["Battery Operated", "AMR Technology", "Water Meter"],
      category: "sensor",
      certification: "",
      icon: <Droplets className="text-cyan-600" size={24} />,
    },
    {
      id: "lightpi",
      name: "LightPi - NEMA Light Controller",
      description:
        "LoRaWAN® Communication. NEMA Standard luminaire compatibility for smart street lighting.",
      imageUrl: "LPI.png",
      features: ["NEMA Compatible", "Street Lighting", "LoRaWAN"],
      category: "controller",
      certification: "",
      icon: <Lightbulb className="text-yellow-600" size={24} />,
    },
    {
      id: "lwmb",
      name: "ClodPi Modbus Adapter",
      description:
        "Enable your RS485 devices to communicate over LoRaWAN® network seamlessly.",
      imageUrl: "LWMB.png",
      features: ["Modbus to LoRaWAN", "RS485 Support", "Industrial IoT"],
      category: "adapter",
      certification: "",
      icon: <Cable className="text-gray-600" size={24} />,
    },
  ];

  const heliumProducts = [
    {
      id: "cplh",
      name: "ClodPi Light Hotspot Indoor",
      description:
        "Rugged enclosure for Indoor use. Helium compatible hotspot for indoor network coverage.",
      imageUrl: "ClodPi Website.jpg",
      features: ["Helium Compatible", "Indoor Use", "Compact Design"],
      category: "hotspot",
      certification: "Helium Approved",
      icon: <Cloud className="text-indigo-600" size={24} />,
    },
    {
      id: "cpoh",
      name: "ClodPi Outdoor Hotspot for Helium",
      description:
        "Industrial grade enclosure for outdoor applications. Designed for harsh environments.",
      imageUrl: "CPOH.png",
      features: ["Outdoor Rated", "Industrial Grade", "Helium Network"],
      category: "hotspot",
      certification: "Helium Approved",
      icon: <Shield className="text-emerald-600" size={24} />,
    },
    {
      id: "cphhid",
      name: "ClodPi Indoor Hotspot for Helium",
      description:
        "Rugged enclosure for Indoor use. High-performance hotspot for Helium network.",
      imageUrl: "CPHHID.png",
      features: ["Rugged Design", "High Performance", "Helium Compatible"],
      category: "hotspot",
      certification: "Helium Approved",
      icon: <Wifi className="text-violet-600" size={24} />,
    },
  ];

  // Handle product click
  const handleProductClick = (productId) => {
    // In a real application, this would navigate to the product detail page
    console.log(`Navigating to product: ${productId}`);
    // For now, we'll simulate navigation
    window.location.href = `/products/${productId}`;
  };

  // Handle "View All" click
  const handleViewAll = (category) => {
    console.log(`View all ${category} products`);
    window.location.href = `/products/category/${category}`;
  };

  return (
    <section id="products" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>

      {/* Network Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary}20 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">
              Our Products
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Indigenous <span className="text-primary">IoT Hardware</span>{" "}
            Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Industrial-grade LoRaWAN® gateways, Helium-compatible hotspots, and
            specialized IoT devices designed and manufactured in India for
            reliable connectivity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {productCategories.map((category) => (
            <button
              key={category.id}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${category.color} hover:shadow-md active:scale-95`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:shadow-md active:scale-95">
            <span>All Products</span>
          </button>
        </div>

        {/* LoRaWAN Products Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark flex items-center gap-3">
                <RadioTower className="text-primary" size={28} />
                LoRaWAN® Products
              </h2>
              <p className="text-gray-600 mt-2">
                Industrial grade hardware for IoT connectivity
              </p>
            </div>
            <button
              onClick={() => handleViewAll("lorawan")}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors"
            >
              View All
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lorawanProducts.map((product, index) => (
              <div key={product.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                    {/* Placeholder for image - replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        {product.icon}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {product.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Certification Badge */}
                    {product.certification && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                          {product.certification}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-dark mb-3 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="mt-auto w-full py-3 bg-linear-to-r from-primary to-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 active:scale-95 group/btn"
                    >
                      <span>View Details</span>
                      <ExternalLink
                        className="group-hover/btn:translate-x-1 transition-transform"
                        size={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => handleViewAll("lorawan")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              View All LoRaWAN Products
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Helium Products Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark flex items-center gap-3">
                <Globe className="text-green-600" size={28} />
                Helium Compatible Products
              </h2>
              <p className="text-gray-600 mt-2">
                The only Indian company approved by Helium
              </p>
            </div>
            <button
              onClick={() => handleViewAll("helium")}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-green-700 font-medium hover:bg-green-50 rounded-lg transition-colors"
            >
              View All
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heliumProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-200 to-emerald-100 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Product Image with Helium Badge */}
                  <div className="relative h-48 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center">
                        {product.icon}
                      </div>
                    </div>

                    {/* Helium Approval Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-green-600/90 text-white text-xs font-medium rounded-full">
                        HELIUM APPROVED
                      </span>
                    </div>

                    {/* Certification Badge */}
                    {product.certification && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                          {product.certification}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-dark mb-3 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="mt-auto w-full py-3 bg-linear-to-r from-green-600 to-emerald-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 active:scale-95 group/btn"
                    >
                      <span>View Details</span>
                      <ExternalLink
                        className="group-hover/btn:translate-x-1 transition-transform"
                        size={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => handleViewAll("helium")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              View All Helium Products
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* All Products CTA */}
        <div className="bg-linear-to-r from-primary/5 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-6">
              <Cpu className="text-white" size={28} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Need Custom IoT Hardware?
            </h3>

            <p className="text-gray-600 mb-8">
              We specialize in designing and manufacturing custom IoT hardware
              solutions for specific use cases. Contact us for bespoke product
              development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                Contact Sales Team
              </button>
              <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                Download Product Catalog
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
