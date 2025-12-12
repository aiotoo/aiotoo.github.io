import React from "react";
import { ExternalLink, ArrowRight, Cpu } from "lucide-react";
import Container from "./Container";
import colors from "../constants/colors";

// Import product images (make sure these exist in your assets)
import CpHeroImage from "../assets/CPHH.png";
import CpigImage from "../assets/CPIG.png";
import HaImage from "../assets/HA.png";
import LteImage from "../assets/Battery.png";
import LwccImage from "../assets/LWCC.png";
import WaterMeterImage from "../assets/ClodPi Water Meter AMR.png";
import LightPiImage from "../assets/LPI.png";
import LwmbImage from "../assets/LWMB.png";
import CplhImage from "../assets/ClodPi Website.png";
import CpohImage from "../assets/CPOH.png";
import CphhidImage from "../assets/CPHHID.png";

const Products = () => {
  // Product categories
  const productCategories = [
    {
      id: "lorawan",
      name: "LoRaWAN® Products",
      color: `bg-[${colors.secondary}]/10 text-[${colors.primary}] border border-[${colors.secondary}]/20`,
      hover: `hover:bg-[${colors.secondary}]/20`,
      active: `bg-[${colors.secondary}]/20`,
    },
    {
      id: "helium",
      name: "Helium Compatible",
      color: `bg-[${colors.success}]/10 text-[${colors.success}] border border-[${colors.success}]/20`,
      hover: `hover:bg-[${colors.success}]/20`,
      active: `bg-[${colors.success}]/20`,
    },
  ];

  // Main products data with actual images
  const lorawanProducts = [
    {
      id: "cphh",
      name: "ClodPi Outdoor Gateway for LoRaWAN®",
      description:
        "Industrial grade enclosure for outdoor applications with rugged design and weatherproof protection.",
      image: CpHeroImage,
      features: ["Outdoor Rated", "Industrial Grade", "Weatherproof"],
      category: "gateway",
      certification: "WPC Certified",
      badgeColor: "bg-[#3b82f6]",
    },
    {
      id: "cpig",
      name: "ClodPi Indoor Gateway for LoRaWAN®",
      description:
        "High-performance indoor gateway for enterprise and industrial LoRaWAN network deployment.",
      image: CpigImage,
      features: ["Enterprise Grade", "High Performance", "Compact Design"],
      category: "gateway",
      certification: "WPC Certified",
      badgeColor: "bg-[#3b82f6]",
    },
    {
      id: "ha",
      name: "ClodPi ATOM Hub",
      description:
        "For Home Assistant. Supports Zigbee, Thread, Matter, Bluetooth and WiFi connectivity.",
      image: HaImage,
      features: ["Multi-Protocol", "Home Assistant", "Smart Home"],
      category: "hub",
      certification: "",
      badgeColor: "bg-[#10b981]",
    },
    {
      id: "lte",
      name: "Battery-operated LTE Module",
      description:
        "Suitable for Water and Gas meter applications with ultra-low power consumption.",
      image: LteImage,
      features: ["LTE Connectivity", "Low Power", "Meter Applications"],
      category: "module",
      certification: "",
      badgeColor: "bg-[#06b6d4]",
    },
    {
      id: "lwcc",
      name: "LoRaWAN® Concentrator Card",
      description:
        "IN865 / US915 certified. WPC, FCC, IC, RCM certified. SX1302 Design in Mini PCIe Form Factor.",
      image: LwccImage,
      features: ["Multi-Certified", "SX1302 Chip", "Mini PCIe"],
      category: "component",
      certification: "WPC, FCC, IC, RCM",
      badgeColor: "bg-[#0f172a]",
    },
    {
      id: "water-meter",
      name: "Water Meter Reader AMR",
      description:
        "Battery-operated Water Meter reader AMR for Magnetic and Inductive sensors.",
      image: WaterMeterImage,
      features: ["Battery Operated", "AMR Technology", "Water Meter"],
      category: "sensor",
      certification: "",
      badgeColor: "bg-[#06b6d4]",
    },
    {
      id: "lightpi",
      name: "LightPi - NEMA Light Controller",
      description:
        "LoRaWAN® Communication. NEMA Standard luminaire compatibility for smart street lighting.",
      image: LightPiImage,
      features: ["NEMA Compatible", "Street Lighting", "LoRaWAN"],
      category: "controller",
      certification: "",
      badgeColor: "bg-[#f59e0b]",
    },
    {
      id: "lwmb",
      name: "ClodPi Modbus Adapter",
      description:
        "Enable your RS485 devices to communicate over LoRaWAN® network seamlessly.",
      image: LwmbImage,
      features: ["Modbus to LoRaWAN", "RS485 Support", "Industrial IoT"],
      category: "adapter",
      certification: "",
      badgeColor: "bg-[#6b7280]",
    },
  ];

  const heliumProducts = [
    {
      id: "cplh",
      name: "ClodPi Light Hotspot Indoor",
      description:
        "Rugged enclosure for Indoor use. Helium compatible hotspot for indoor network coverage.",
      image: CplhImage,
      features: ["Helium Compatible", "Indoor Use", "Compact Design"],
      category: "hotspot",
      certification: "Helium Approved",
      badgeColor: "bg-[#10b981]",
    },
    {
      id: "cpoh",
      name: "ClodPi Outdoor Hotspot for Helium",
      description:
        "Industrial grade enclosure for outdoor applications. Designed for harsh environments.",
      image: CpohImage,
      features: ["Outdoor Rated", "Industrial Grade", "Helium Network"],
      category: "hotspot",
      certification: "Helium Approved",
      badgeColor: "bg-[#10b981]",
    },
    {
      id: "cphhid",
      name: "ClodPi Indoor Hotspot for Helium",
      description:
        "Rugged enclosure for Indoor use. High-performance hotspot for Helium network.",
      image: CphhidImage,
      features: ["Rugged Design", "High Performance", "Helium Compatible"],
      category: "hotspot",
      certification: "Helium Approved",
      badgeColor: "bg-[#10b981]",
    },
  ];

  // Handle product click
  const handleProductClick = (productId) => {
    console.log(`Navigating to product: ${productId}`);
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
      <div className="absolute inset-0 bg-linear-to-b from-[#f1f5f9] to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-[#0f172a]/5 to-transparent"></div>

      {/* Network Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#3b82f6]/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0f172a]/5 rounded-full blur-3xl opacity-20"></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a]/10 rounded-full border border-[#0f172a]/20 mb-6">
            <span className="w-2 h-2 bg-[#0f172a] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-[#0f172a]">
              Our Products
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">
            Indigenous <span className="text-[#0f172a]">IoT Hardware</span>{" "}
            Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Industrial-grade LoRaWAN® gateways, Helium-compatible hotspots, and
            specialized IoT devices designed and manufactured in India for
            reliable connectivity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
          {productCategories.map((category) => (
            <button
              key={category.id}
              className={`inline-flex items-center px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${category.color} ${category.hover} hover:shadow-md active:scale-95`}
              onClick={() => console.log(`Filter by ${category.id}`)}
            >
              {category.name}
            </button>
          ))}
          <button className="inline-flex items-center px-5 py-2.5 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:shadow-md active:scale-95 hover:bg-gray-200">
            <span>All Products</span>
          </button>
        </div>

        {/* LoRaWAN Products Section */}
        <div className="mb-16 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0f172a]/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div>
                </div>
                LoRaWAN® Products
              </h2>
              <p className="text-gray-600 mt-2">
                Industrial grade hardware for IoT connectivity
              </p>
            </div>
            <button
              onClick={() => handleViewAll("lorawan")}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 text-[#0f172a] font-medium hover:bg-[#0f172a]/5 rounded-lg transition-colors border border-[#0f172a]/20"
            >
              View All
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lorawanProducts.map((product) => (
              <div
                key={product.id}
                className="group relative transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

                {/* Product Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="w-20 h-20 rounded-xl bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                              <div class="w-8 h-8 rounded-full ${product.badgeColor}"></div>
                            </div>
                          </div>
                        `;
                      }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`px-3 py-1 ${product.badgeColor}/90 text-white text-xs font-medium rounded-full`}
                      >
                        {product.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Certification Badge */}
                    {product.certification && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 bg-[#10b981]/90 text-white text-xs font-medium rounded-full">
                          {product.certification}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-5 grow flex flex-col">
                    <h3 className="text-lg font-bold text-[#1e293b] mb-3 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 grow line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="w-full py-3 bg-linear-to-r from-[#0f172a] to-[#1e293b] text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 active:scale-95 group/btn"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white font-medium rounded-lg hover:shadow-lg transition-all active:scale-95"
            >
              View All LoRaWAN Products
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Helium Products Section */}
        <div className="mb-16 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                </div>
                Helium Compatible Products
              </h2>
              <p className="text-gray-600 mt-2">
                The only Indian company approved by Helium
              </p>
            </div>
            <button
              onClick={() => handleViewAll("helium")}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 text-[#10b981] font-medium hover:bg-[#10b981]/5 rounded-lg transition-colors border border-[#10b981]/20"
            >
              View All
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heliumProducts.map((product) => (
              <div
                key={product.id}
                className="group relative transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-[#10b981]/20 to-emerald-100/50 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

                {/* Product Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 bg-linear-to-br from-[#10b981]/5 to-emerald-50/30 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="w-20 h-20 rounded-xl bg-linear-to-br from-green-100 to-emerald-50 flex items-center justify-center">
                              <div class="w-8 h-8 rounded-full bg-[#10b981]"></div>
                            </div>
                          </div>
                        `;
                      }}
                    />

                    {/* Helium Approval Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#10b981]/90 text-white text-xs font-medium rounded-full">
                        HELIUM APPROVED
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-5 grow flex flex-col">
                    <h3 className="text-lg font-bold text-[#1e293b] mb-3 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 grow line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#10b981]/10 text-[#065f46] text-xs font-medium rounded-full border border-[#10b981]/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="w-full py-3 bg-linear-to-r from-[#10b981] to-emerald-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 active:scale-95 group/btn"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] text-white font-medium rounded-lg hover:shadow-lg transition-all active:scale-95"
            >
              View All Helium Products
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* All Products CTA */}
        <div className="bg-linear-to-r from-[#0f172a]/5 to-[#3b82f6]/10 rounded-2xl p-8 md:p-12 text-center mx-4 md:mx-0">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#0f172a] to-[#3b82f6] flex items-center justify-center mx-auto mb-6">
              <Cpu className="text-white" size={28} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
              Need Custom IoT Hardware?
            </h3>

            <p className="text-gray-600 mb-8">
              We specialize in designing and manufacturing custom IoT hardware
              solutions for specific use cases. Contact us for bespoke product
              development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-[#0f172a] text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#1e293b]">
                Contact Sales Team
              </button>
              <button className="px-8 py-3.5 bg-white text-[#0f172a] font-medium rounded-lg border-2 border-[#0f172a]/20 hover:border-[#0f172a]/40 hover:shadow-lg transition-all hover:bg-[#f1f5f9]">
                Download Product Catalog
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
    </section>
  );
};

export default Products;
