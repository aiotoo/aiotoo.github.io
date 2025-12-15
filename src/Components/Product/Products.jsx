import { useNavigate } from "react-router-dom";
import { allProducts } from "../../utils/AllProducts";
import {
  ArrowRight,
  Award,
  Shield,
  Zap,
  RadioTower,
  Layers,
  Eye,
} from "lucide-react";
import { colors, gradients } from "../../constants/colors";

const Products = () => {
  const navigate = useNavigate();
  const previewProducts = allProducts.slice(0, 3);

  return (
    <section
      id="products"
      className="relative py-10 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background with Glass Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full animate-pulse opacity-20"
          style={{
            background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
            animationDuration: "8s",
          }}
        ></div>
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full animate-pulse opacity-15"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}30 0%, transparent 70%)`,
            animationDuration: "10s",
            animationDelay: "2s",
          }}
        ></div>

        {/* Glass overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-linear-to-br from-white/10 to-white/5"></div>

        {/* Network Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${colors.primary} 1px, transparent 1px),
              linear-gradient(to bottom, ${colors.primary} 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Glass Effect */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="relative">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{ backgroundImage: gradients.primary }}
              >
                Our Products
              </span>
              <RadioTower
                className="absolute -top-6 -right-8 w-10 h-10 opacity-70 animate-float"
                style={{ color: colors.secondary, animationDelay: "1s" }}
              />
            </span>
            <br />
            <span className="relative">
              <span
                className="relative z-10 text-3xl md:text-4xl lg:text-5xl"
                style={{ color: colors.dark }}
              >
                IoT Hardware Collection
              </span>
            </span>
          </h2>

          {/* Glass Description Card */}
          <div className="max-w-3xl mx-auto">
            <div
              className="p-8 rounded-2xl backdrop-blur-lg border border-white/30 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <p
                className="text-xl opacity-90 leading-relaxed"
                style={{ color: colors.dark }}
              >
                Discover our range of industrial-grade LoRaWAN® gateways,
                Helium-compatible hotspots, and specialized IoT devices designed
                and manufactured in India for reliable connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {previewProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
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
                  {product.description ||
                    "Industrial-grade IoT hardware for reliable connectivity"}
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
                  <ArrowRight
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

        {/* CTA Section with Glass Effect */}
        <div
          className="rounded-3xl overflow-hidden backdrop-blur-2xl p-10 md:p-16 text-center border border-white/30"
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
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: colors.dark }}
            >
              Explore Our Complete Product Range
            </h3>

            <p
              className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              From gateways to sensors, discover our full catalog of IoT
              hardware designed for industrial applications, smart cities, and
              enterprise solutions.
            </p>

            {/* View More Button */}
            <div className="text-center">
              <button
                onClick={() => navigate("/productUs")}
                className="group px-12 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto"
                style={{
                  background: gradients.primary,
                  color: "white",
                  boxShadow: `0 10px 40px ${colors.primary}40`,
                }}
              >
                <span>View All Products</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
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
              <div className="flex items-center gap-2">
                <Zap size={20} style={{ color: colors.primary }} />
                <span className="font-medium" style={{ color: colors.dark }}>
                  1+ Year Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, white 0%, transparent 100%)`,
        }}
      ></div>
    </section>
  );
};

export default Products;
