// Components/ProductUs.jsx
import React, { useState } from "react";
import {
  ArrowRight,
  RadioTower,
  Zap,
  Shield,
  Eye,
  ChevronRight,
  Award,
  Sparkles,
  Layers,
  Filter,
  Target,
} from "lucide-react";
import Container from "./Container";
import { colors, gradients } from "../constants/colors";
import { allProducts, productCategories } from "../utils/AllProducts";
import BackgroundIconRenderer from "../utils/BackgroundIconRenderer";
import { useNavigate } from "react-router-dom"; // Add this import

const ProductUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <section
      id="product-us"
      className="relative min-h-screen overflow-hidden mt-20"
    >
      {/* Enhanced Background */}
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
        {/* Header Section with Glass Effect */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          {/* Glass Badge */}
          <div className="inline-block mb-8">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/30 shadow-lg transition-all duration-300 hover:scale-105 group"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <Award size={18} style={{ color: colors.primary }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.primary }}
              >
                Our Complete Product Range
              </span>
              <Sparkles
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: colors.secondary }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="relative">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{ backgroundImage: gradients.primary }}
              >
                Indigenous IoT
              </span>
              <RadioTower
                className="absolute -top-6 -right-10 w-10 h-10 opacity-70 animate-float"
                style={{ color: colors.secondary }}
              />
            </span>
            <br />
            <span className="relative">
              <span
                className="relative z-10 text-4xl md:text-5xl lg:text-6xl"
                style={{ color: colors.dark }}
              >
                Hardware Solutions
              </span>
            </span>
          </h1>

          {/* Glass Description Card */}
          <div className="space-y-6 max-w-5xl mx-auto">
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
                Industrial-grade LoRaWAN® gateways, Helium-compatible hotspots,
                and specialized IoT devices designed and manufactured in India
                for reliable connectivity across diverse applications.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter with Glass Effect */}
        <div
          className="sticky top-24 z-20 mb-12 rounded-3xl backdrop-blur-xl p-6 border border-white/30 shadow-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Filter size={24} style={{ color: colors.primary }} />
            <h3 className="text-xl font-bold" style={{ color: colors.dark }}>
              Filter by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "text-white shadow-2xl"
                    : ""
                }`}
                style={{
                  background:
                    selectedCategory === category.id
                      ? category.gradient
                      : "rgba(255, 255, 255, 0.1)",
                  border: `1px solid rgba(255, 255, 255, 0.3)`,
                  color:
                    selectedCategory === category.id ? "white" : colors.dark,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      selectedCategory === category.id
                        ? "rgba(255, 255, 255, 0.2)"
                        : `${colors.primary}15`,
                  }}
                >
                  {category.icon}
                </div>
                <span className="font-semibold">{category.name}</span>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20"
                      : "bg-gray-100"
                  }`}
                  style={
                    selectedCategory === category.id
                      ? { color: "white" }
                      : { color: colors.dark }
                  }
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target size={20} style={{ color: colors.primary }} />
            <span
              className="text-lg font-semibold"
              style={{ color: colors.dark }}
            >
              {filteredProducts.length} Products Found
            </span>
          </div>
          <div className="text-sm opacity-70" style={{ color: colors.dark }}>
            Showing {filteredProducts.length} of {allProducts.length} total
            products
          </div>
        </div>

        {/* Products Grid - FIXED VERSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-6 left-6 z-30">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                    style={{
                      background: product.badgeColor || gradients.primary,
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image Container */}
              <div className="relative h-60 bg-linear-to-br from-white/50 to-white/10 overflow-hidden">
                {/* Technology Badge */}
                <div className="absolute top-6 right-6 z-30">
                  <div
                    className="px-4 py-2 rounded-full backdrop-blur-md border"
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <span
                      className="text-sm font-medium flex items-center gap-2"
                      style={{ color: colors.dark }}
                    >
                      {product.technology === "Helium" ? (
                        <>
                          <Zap size={14} style={{ color: colors.secondary }} />
                          Helium
                        </>
                      ) : (
                        <>
                          <RadioTower
                            size={14}
                            style={{ color: colors.primary }}
                          />
                          LoRaWAN
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Image Container */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Product Image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="w-24 h-24 rounded-2xl flex items-center justify-center"
                                style="background: ${
                                  product.technology === "Helium"
                                    ? gradients.secondary
                                    : gradients.primary
                                }">
                                <Cpu class="text-white" size={32} />
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Quick View Button */}
                <button
                  className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/products/${product.id}`);
                  }}
                >
                  <Eye size={18} style={{ color: colors.primary }} />
                </button>
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Name and Type */}
                <div className="mb-4">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.dark }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm opacity-70"
                    style={{ color: colors.dark }}
                  >
                    {product.type}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {(
                      product.features || [
                        "LoRaWAN Compatible",
                        "Industrial Grade",
                        "Made in India",
                      ]
                    )
                      .slice(0, 3)
                      .map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-xs font-medium rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          style={{
                            background: `${colors.primary}10`,
                            border: `1px solid ${colors.primary}20`,
                            color: colors.dark,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    {product.features && product.features.length > 3 && (
                      <span
                        className="px-3 py-2 text-xs font-medium rounded-lg backdrop-blur-sm"
                        style={{
                          background: `${colors.secondary}10`,
                          border: `1px solid ${colors.secondary}20`,
                          color: colors.dark,
                        }}
                      >
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  className="w-full py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group/btn flex items-center justify-center gap-3"
                  style={{
                    background: gradients.primary,
                    color: "white",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/products/${product.id}`);
                  }}
                >
                  <span>View Details</span>
                  <ChevronRight
                    size={16}
                    className="group-hover/btn:translate-x-2 transition-transform"
                  />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="rounded-3xl overflow-hidden backdrop-blur-2xl p-12 text-center border border-white/30"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-2xl"
              style={{ background: gradients.primary }}
            >
              <Layers size={32} color="white" />
            </div>

            <h3
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: colors.dark }}
            >
              Need Custom IoT Solutions?
            </h3>

            <p
              className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              We specialize in designing and manufacturing custom IoT hardware
              solutions tailored to your specific requirements. Get in touch
              with our engineering team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                style={{
                  background: gradients.primary,
                  color: "white",
                  boxShadow: `0 10px 40px ${colors.primary}30`,
                }}
              >
                <span>Contact Our Team</span>
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t"
              style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="flex items-center gap-2">
                <Shield size={20} style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.dark }}>
                  Made in India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.dark }}>
                  Quality Certified
                </span>
              </div>
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

export default ProductUs;
