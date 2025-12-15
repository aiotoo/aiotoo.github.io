import React from "react";
import {
  Cpu,
  Cloud,
  Zap,
  Globe,
  Lock,
  Wifi,
  RadioTower,
  Shield,
  Building,
  Battery,
  MapPin,
  Network,
  Smartphone,
  Database,
  BarChart,
  Target,
  Award,
  Users,
  Rocket,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import Container from "../../utils/Container";
import { colors, gradients } from "../../constants/colors";
import BackgroundIconRenderer from "../../utils/BackgroundIconRenderer";

const AboutUs = () => {
  // IoT Use Cases with new colors
  const useCases = [
    {
      name: "Energy Meter",
      icon: <Zap size={24} />,
      color: colors.primary,
      gradient: gradients.primary,
    },
    {
      name: "Water Meter",
      icon: <div className="text-2xl">💧</div>,
      color: colors.secondary,
      gradient: gradients.secondary,
    },
    {
      name: "Battery Management",
      icon: <Battery size={24} />,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      name: "Asset Tracker",
      icon: <MapPin size={24} />,
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    },
    {
      name: "Environmental",
      icon: <Cloud size={24} />,
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    },
    {
      name: "Industrial",
      icon: <Cpu size={24} />,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
  ];

  // Technology Comparison
  const legacyTech = [
    {
      name: "WiFi",
      limitation: "Short range, high power",
      icon: <Wifi size={18} />,
      color: colors.accent,
    },
    {
      name: "GSM",
      limitation: "High cost, power hungry",
      icon: <Smartphone size={18} />,
      color: colors.secondary,
    },
    {
      name: "ZigBee",
      limitation: "Limited range",
      icon: <Network size={18} />,
      color: colors.primary,
    },
  ];

  const nextGenTech = [
    {
      name: "LoRaWAN",
      features: ["Long range", "Low power", "Secure"],
      icon: <RadioTower size={22} />,
      gradient: gradients.primary,
    },
    {
      name: "NB-IoT",
      features: ["Cellular based", "Good penetration"],
      icon: <Network size={22} />,
      gradient: gradients.secondary,
    },
    {
      name: "Sigfox",
      features: ["Global network", "Simple devices"],
      icon: <Globe size={22} />,
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    },
    {
      name: "BLE 5 Mesh",
      features: ["Mesh networking", "High data rate"],
      icon: <Wifi size={22} />,
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
  ];

  // LoRaWAN Benefits with new colors
  const loraBenefits = [
    {
      icon: <Shield size={24} />,
      title: "Secure Communication",
      desc: "End-to-end encryption with mutual authentication",
      gradient: gradients.primary,
    },
    {
      icon: <Globe size={24} />,
      title: "Long Range",
      desc: "Up to 15km in rural areas, 5km in urban areas",
      gradient: gradients.secondary,
    },
    {
      icon: <Battery size={24} />,
      title: "Low Power",
      desc: "Battery life up to 10 years",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      icon: <Database size={24} />,
      title: "Scalability",
      desc: "Thousands of devices per gateway",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Bidirectional",
      desc: "Full uplink and downlink communication",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    },
    {
      icon: <BarChart size={24} />,
      title: "Cost Effective",
      desc: "Low infrastructure and maintenance costs",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
  ];

  // Architecture Components
  const architecture = [
    {
      name: "Sensors/End Nodes",
      desc: "Capture data from assets",
      icon: "📡",
      gradient: gradients.primary,
    },
    {
      name: "Gateways",
      desc: "Bridge between sensors and cloud",
      icon: "📶",
      gradient: gradients.secondary,
    },
    {
      name: "Cloud Platform",
      desc: "Store, analyze and manage data",
      icon: "☁️",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    },
    {
      name: "Applications",
      desc: "Visualize data and create alerts",
      icon: "📱",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    },
  ];

  // Stats Data
  const stats = [
    {
      value: "15km",
      label: "Rural Range",
      icon: <Globe size={20} />,
      color: colors.primary,
    },
    {
      value: "10+",
      label: "Years Battery",
      icon: <Battery size={20} />,
      color: colors.secondary,
    },
    {
      value: "1000+",
      label: "Devices/Gateway",
      icon: <Database size={20} />,
      color: "#10b981",
    },
    {
      value: "99.9%",
      label: "Reliability",
      icon: <Shield size={20} />,
      color: "#8b5cf6",
    },
  ];

  return (
    <section
      id="about-us"
      className="relative min-h-screen flex items-center overflow-hidden mt-20"
    >
      {/* Enhanced Background with Icons and Glass Effects */}
      <div className="absolute inset-0 z-0">
        {/* Use BackgroundIconRenderer instead of manual mapping */}
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
        {/* Hero Header with Glass Effect */}
        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-20">
          {/* Glass Badge */}
          <div className="inline-block mb-8">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/30 shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="relative">
                <Award size={18} style={{ color: colors.primary }} />
                <Sparkles
                  className="absolute -top-1 -right-1 w-3 h-3"
                  style={{ color: colors.secondary }}
                />
              </div>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.primary }}
              >
                About ClodPi Labs
              </span>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="relative">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{ backgroundImage: gradients.primary }}
              >
                Powering India's
              </span>
              <Rocket
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
                IoT Future with
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl"
                style={{ backgroundImage: gradients.secondary }}
              >
                LoRaWAN Innovation
              </span>
              <div
                className="absolute -bottom-3 left-0 right-0 h-1.5 rounded-full opacity-50"
                style={{ background: gradients.secondary }}
              ></div>
            </span>
          </h1>

          {/* Glass Description Cards */}
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
                ClodPi Labs (India) is a start-up with an objective to enable
                IoT businesses and products to succeed with relevant
                long-distance IoT connectivity technology. We are expanding
                LoRa® network coverage across India by indigenously designing
                and manufacturing Hardware and developing compatible solutions.
              </p>
            </div>

            <div
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <p
                className="text-xl leading-relaxed"
                style={{ color: colors.dark }}
              >
                With vast proven experience in LoRaWAN network setup and LoRa
                product design, we specialize in RF-based LPWAN systems for
                smart devices that can be operated remotely in alignment with
                smart city objectives across urban infrastructure, industrial
                complexes, agricultural settings, and educational campuses.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl backdrop-blur-lg border border-white/30 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: `${stat.color}20` }}
                >
                  <div style={{ color: stat.color }}>{stat.icon}</div>
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: colors.dark }}
                >
                  {stat.value}
                </div>
              </div>
              <div
                className="text-lg font-medium"
                style={{ color: colors.dark }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Technology Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Mission Card with Glass Effect */}
          <div
            className="rounded-3xl backdrop-blur-xl border border-white/30 p-10 transition-all duration-300 hover:shadow-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ background: gradients.primary }}
                >
                  <Target className="text-white" size={32} />
                </div>
                <Sparkles
                  className="absolute -top-3 -right-3 w-6 h-6 animate-pulse"
                  style={{ color: colors.secondary }}
                />
              </div>
              <div>
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: colors.dark }}
                >
                  Our Mission
                </h3>
                <p className="text-lg mt-2" style={{ color: colors.primary }}>
                  Transforming India's IoT Landscape
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <p
                className="text-xl leading-relaxed"
                style={{ color: colors.dark }}
              >
                ClodPi Labs has vast proven experience in LoRaWAN network setup
                and LoRa product design. We specialize in RF-based LPWAN systems
                for smart devices that can be operated remotely in alignment
                with smart city objectives.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div
                  className="p-6 rounded-2xl backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ background: `${colors.primary}20` }}
                    >
                      <Building size={24} style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-3"
                        style={{ color: colors.dark }}
                      >
                        Smart Infrastructure
                      </h4>
                      <p className="opacity-80" style={{ color: colors.dark }}>
                        For cities, factories, farms & universities
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-2xl backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ background: `${colors.secondary}20` }}
                    >
                      <Lock size={24} style={{ color: colors.secondary }} />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-3"
                        style={{ color: colors.dark }}
                      >
                        Secure Deployment
                      </h4>
                      <p className="opacity-80" style={{ color: colors.dark }}>
                        Public or private network options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Comparison with Glass Effect */}
          <div className="space-y-10">
            <div
              className="p-10 rounded-3xl backdrop-blur-xl border border-white/30"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <h3
                className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4"
                style={{ color: colors.dark }}
              >
                <div
                  className="p-3 rounded-xl shadow-lg"
                  style={{ background: gradients.primary }}
                >
                  <RadioTower size={28} color="white" />
                </div>
                IoT Technology Stack
              </h3>

              {/* Legacy Technologies */}
              <div className="mb-12">
                <h4
                  className="text-xl font-semibold mb-6 px-2"
                  style={{ color: colors.dark }}
                >
                  Traditional Solutions
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {legacyTech.map((tech, index) => (
                    <div
                      key={index}
                      className="text-center p-6 rounded-2xl backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="mb-4 flex justify-center">
                        <div
                          className="p-3 rounded-lg"
                          style={{ background: `${tech.color}20` }}
                        >
                          <div style={{ color: tech.color }}>{tech.icon}</div>
                        </div>
                      </div>
                      <div
                        className="font-bold text-lg mb-2"
                        style={{ color: colors.dark }}
                      >
                        {tech.name}
                      </div>
                      <div
                        className="text-sm opacity-70"
                        style={{ color: colors.dark }}
                      >
                        {tech.limitation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Gen Technologies */}
              <div>
                <h4
                  className="text-xl font-semibold mb-8 px-2"
                  style={{ color: colors.dark }}
                >
                  Next-Generation IoT Technologies
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {nextGenTech.map((tech, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                            style={{ background: tech.gradient }}
                          >
                            <div className="text-white">{tech.icon}</div>
                          </div>
                          <div
                            className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-ping"
                            style={{ background: tech.gradient }}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="font-bold text-xl mb-4"
                            style={{ color: colors.dark }}
                          >
                            {tech.name}
                          </div>
                          <div className="space-y-3">
                            {tech.features.map((feature, i) => (
                              <div
                                key={i}
                                className="text-base opacity-90 flex items-center"
                                style={{ color: colors.dark }}
                              >
                                <div
                                  className="w-2 h-2 rounded-full mr-4"
                                  style={{ background: tech.gradient }}
                                ></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LoRaWAN Benefits */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8 backdrop-blur-xl border border-white/30"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <RadioTower size={24} style={{ color: colors.primary }} />
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ color: colors.dark }}
              >
                Why{" "}
                <span
                  style={{
                    backgroundImage: gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LoRaWAN®
                </span>{" "}
                for IoT?
              </h3>
            </div>
            <p
              className="text-xl opacity-90 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              LoRaWAN - a Low Power Wide Area Network (LPWAN) with
              specifications that achieve key IoT objectives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loraBenefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-3xl backdrop-blur-xl border border-white/30 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: benefit.gradient }}
                    >
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                      style={{ background: benefit.gradient }}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <h4
                      className="font-bold text-xl mb-4"
                      style={{ color: colors.dark }}
                    >
                      {benefit.title}
                    </h4>
                    <p className="opacity-80" style={{ color: colors.dark }}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8 backdrop-blur-xl border border-white/30"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <Cpu size={24} style={{ color: colors.primary }} />
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ color: colors.dark }}
              >
                Smart Device Implementation
              </h3>
            </div>
            <p
              className="text-xl opacity-90 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              Our expertise includes development of smart devices/utilities for
              remote operation in accordance with smart city objectives
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-xl border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-3xl group cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = useCase.gradient;
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.3)";
                }}
              >
                <div className="text-center">
                  <div className="mb-5 flex justify-center group-hover:scale-125 transition-transform duration-300">
                    <div
                      className="p-4 rounded-xl shadow-lg"
                      style={{
                        background: `${useCase.color}20`,
                        border: `1px solid ${useCase.color}30`,
                      }}
                    >
                      <div style={{ color: useCase.color }}>{useCase.icon}</div>
                    </div>
                  </div>
                  <div
                    className="font-bold text-base md:text-lg group-hover:text-white transition-colors duration-300"
                    style={{ color: colors.dark }}
                  >
                    {useCase.name}
                  </div>
                  <div className="text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white flex items-center justify-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8 backdrop-blur-xl border border-white/30"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <Layers size={24} style={{ color: colors.primary }} />
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ color: colors.dark }}
              >
                Our Architecture
              </h3>
            </div>
            <p
              className="text-xl opacity-90 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              Complete end-to-end IoT solution architecture
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {architecture.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl backdrop-blur-xl border border-white/30 transition-all duration-300 hover:scale-[1.05] hover:shadow-3xl group"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="text-4xl mb-6 text-center group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4
                  className="font-bold text-xl mb-4 text-center"
                  style={{ color: colors.dark }}
                >
                  {item.name}
                </h4>
                <p
                  className="opacity-80 text-center"
                  style={{ color: colors.dark }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-24 p-12 rounded-3xl text-center backdrop-blur-2xl border border-white/30"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <Users
            className="w-20 h-20 mx-auto mb-8 animate-float"
            style={{ color: colors.primary }}
          />
          <h3
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: colors.dark }}
          >
            Ready to Transform Your IoT Solutions?
          </h3>
          <p
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12"
            style={{ color: colors.dark }}
          >
            Join India's IoT revolution with our cutting-edge LoRaWAN technology
            and indigenous hardware solutions.
          </p>
          <button
            className="group px-12 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto"
            style={{
              background: gradients.primary,
              color: "white",
              boxShadow: `0 10px 40px ${colors.primary}40`,
            }}
          >
            <span>Connect With Our Team</span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </Container>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, white 0%, transparent 100%)`,
        }}
      ></div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-10">
        <div className="flex gap-12">
          <RadioTower
            className="w-28 h-28 animate-pulse"
            style={{ color: colors.primary }}
          />
          <Cpu
            className="w-24 h-24 animate-pulse"
            style={{ animationDelay: "0.5s", color: colors.secondary }}
          />
          <Globe
            className="w-28 h-28 animate-pulse"
            style={{ animationDelay: "1s", color: "#10B981" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
