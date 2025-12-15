import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Zap,
  Wifi,
  Globe,
  Cloud,
  RadioTower,
  Thermometer,
  Droplets,
  Wind,
  HardDrive,
  Cpu,
  ShoppingCart,
  Download,
  Mail,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { ProductCollections } from "../utils/ProductCollections";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Get product from your detailed product data
  const product = ProductCollections[id];

  // Auto slide images every 5 seconds
  useEffect(() => {
    if (!product?.additionalImages || product.additionalImages.length <= 1)
      return;

    let interval;
    if (isAutoSliding && !showFullscreen) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.additionalImages.length ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoSliding, product?.additionalImages, showFullscreen]);

  // Combine main image with additional images
  const allImages = product
    ? [product.image, ...(product.additionalImages || [])]
    : [];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist in our catalog.
          </p>
          <button
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center mx-auto"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft className="mr-2" /> Browse All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Fullscreen Image Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 p-2"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-6 text-white hover:text-gray-300 p-2"
            >
              <ChevronLeft size={32} />
            </button>
            <img
              src={allImages[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-6 text-white hover:text-gray-300 p-2"
            >
              <ChevronRight size={32} />
            </button>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center text-sm text-gray-600 mb-8">
            <button
              onClick={() => navigate("/products")}
              className="hover:text-blue-600 transition"
            >
              Products
            </button>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">{product.name}</span>
          </nav>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image Carousel */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={allImages[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-96 object-contain transition-transform duration-500 ease-in-out transform"
                  />

                  {/* Navigation Buttons */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => setShowFullscreen(true)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={20} />
                  </button>

                  {/* Auto Slide Toggle */}
                  {allImages.length > 1 && (
                    <button
                      onClick={() => setIsAutoSliding(!isAutoSliding)}
                      className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {isAutoSliding ? "⏸️ Pause" : "▶️ Play"}
                    </button>
                  )}

                  {/* Image Counter */}
                  {allImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  )}

                  {product.badge && (
                    <span
                      className="absolute top-4 left-4 px-4 py-2 rounded-full text-white font-semibold text-sm"
                      style={{
                        backgroundColor: product.badgeColor || "#3b82f6",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {allImages.length > 1 && (
                  <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                    {allImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-blue-500 scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Dots Indicator */}
                {allImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-blue-600 w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  {product.type}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-700 mb-6">{product.tagline}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <p className="text-gray-600">{product.detailedDescription}</p>
              </div>

              {/* Quick Stats */}
              {product.stats && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-y border-gray-200">
                  {product.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center text-blue-600 mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact & Action Buttons */}
              <div className="space-y-4">
                {product.emails && (
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center text-blue-700 mb-2">
                      <Mail size={18} className="mr-2" />
                      <span className="font-semibold">Contact Sales</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-600 mr-2">General:</span>
                        <a
                          href={`mailto:${product.emails.general}`}
                          className="text-blue-600 hover:underline"
                        >
                          {product.emails.general}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-600 mr-2">Sales:</span>
                        <a
                          href={`mailto:${product.emails.sales}`}
                          className="text-blue-600 hover:underline"
                        >
                          {product.emails.sales}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features & Specifications Tabs */}
          <div className="mb-12">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              {["overview", "specifications", "features", "docs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-lg capitalize transition ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === "overview" && product.mainFeatures && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.mainFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <div style={{ color: feature.color }}>
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "specifications" && product.specifications && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {spec.label}
                        </div>
                        <div className="text-gray-700">{spec.value}</div>
                      </div>
                    </div>
                  ))}

                  {/* Enclosure Details from your data */}
                  {product.enclosure && (
                    <div className="col-span-1 md:col-span-2 mt-6 p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <h4 className="font-bold text-xl text-gray-900 mb-4">
                        Enclosure Details
                      </h4>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 mr-4 mt-1">
                          <Shield size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-2">
                            {product.enclosure.material}
                          </div>
                          <ul className="space-y-2">
                            {product.enclosure.features.map((feat, idx) => (
                              <li
                                key={idx}
                                className="flex items-center text-gray-700"
                              >
                                <CheckCircle
                                  size={16}
                                  className="text-green-500 mr-2"
                                />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Key Advantages
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-700">
                          Industrial grade outdoor gateway with weatherproof
                          IP67 enclosure
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-700">
                          Built-in surge protection for lightning and electrical
                          surges
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-700">
                          Dual breather design for natural cooling in harsh
                          environments
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Gateway Dashboard Section */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Gateway Dashboard
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                            <RadioTower size={20} />
                          </div>
                          <h4 className="font-bold text-gray-900">
                            Gateway List
                          </h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Monitor and manage all your deployed gateways from a
                          single dashboard
                        </p>
                        <button className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                          View Dashboard{" "}
                          <ExternalLink size={16} className="ml-2" />
                        </button>
                      </div>

                      <div className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-4">
                            <Cloud size={20} />
                          </div>
                          <h4 className="font-bold text-gray-900">
                            Details & Support
                          </h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Access detailed logs, analytics, and technical support
                          resources
                        </p>
                        <button className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                          Get Support{" "}
                          <ExternalLink size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "docs" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Documentation & Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "User Manual",
                        size: "PDF, 2.4 MB",
                        color: "blue",
                      },
                      {
                        title: "Technical Specifications",
                        size: "PDF, 1.8 MB",
                        color: "green",
                      },
                      {
                        title: "Installation Guide",
                        size: "PDF, 3.1 MB",
                        color: "purple",
                      },
                      {
                        title: "API Documentation",
                        size: "Web, Interactive",
                        color: "orange",
                      },
                    ].map((doc, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">
                              {doc.title}
                            </h4>
                            <p className="text-sm text-gray-500">{doc.size}</p>
                          </div>
                          <div
                            className={`w-10 h-10 rounded-lg bg-${doc.color}-100 flex items-center justify-center text-${doc.color}-600`}
                          >
                            <Download size={20} />
                          </div>
                        </div>
                        <button className="w-full py-2.5 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* More Details Section */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Need Customization?</h3>
              <p className="text-blue-100 text-lg mb-6">
                We offer customized solutions for enterprise deployments.
                Contact our sales team to discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Request Custom Quote
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* You would map through related products here */}
              <button
                onClick={() => navigate("/products/cpig")}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border border-gray-200 hover:border-blue-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <RadioTower size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  ClodPi Indoor Gateway
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  High-performance indoor gateway for enterprise deployments
                </p>
                <span className="text-blue-600 font-medium text-sm">
                  View Details →
                </span>
              </button>

              <button
                onClick={() => navigate("/products/lwmb")}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border border-gray-200 hover:border-blue-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  <HardDrive size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Modbus Adapter</h4>
                <p className="text-gray-600 text-sm mb-4">
                  RS485 to LoRaWAN converter for industrial automation
                </p>
                <span className="text-blue-600 font-medium text-sm">
                  View Details →
                </span>
              </button>

              <button
                onClick={() => navigate("/products/lightpi")}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border border-gray-200 hover:border-blue-300"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  <Zap size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  LightPi Controller
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Smart street lighting controller with dimmer control
                </p>
                <span className="text-blue-600 font-medium text-sm">
                  View Details →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
