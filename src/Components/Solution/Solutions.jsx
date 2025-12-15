import React from "react";
import {
  Cloud,
  Shield,
  Cpu,
  RadioTower,
  ArrowRight,
  Terminal,
  Users,
  Sparkles,
  Layers,
  Wifi,
  Network,
  GitBranch,
  Code,
  Eye,
  ExternalLink,
} from "lucide-react";
import Container from "../../utils/Container";
import { colors, gradients } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  const handleConsoleRedirect = () => {
    window.open("https://console.clodpi.io/", "_blank");
  };

  // Solutions Data
  const solutions = [
    {
      id: "console",
      name: "LoRaWAN Network Console",
      description:
        "Plug-and-play compatible network console for managing LoRaWAN gateways and devices with minimal configuration.",
      icon: <Terminal size={28} />,
      color: colors.primary,
      gradient: gradients.primary,
      features: [
        "Semtech Packet Forwarder Compatible",
        "Real-time Data Monitoring",
        "Device Management",
        "Application Integration",
      ],
      badge: "Featured",
    },
    {
      id: "iot-platform",
      name: "IoT Cloud Platform",
      description:
        "Comprehensive cloud platform for device management, data analytics, and application development.",
      icon: <Cloud size={28} />,
      color: colors.secondary,
      gradient: gradients.secondary,
      features: [
        "Scalable Infrastructure",
        "Real-time Analytics",
        "Multi-tenant Support",
        "API Integration",
      ],
      badge: "Popular",
    },
    {
      id: "security",
      name: "Security Suite",
      description:
        "End-to-end encryption and security protocols for industrial IoT deployments.",
      icon: <Shield size={28} />,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      features: [
        "AES-128 Encryption",
        "Device Authentication",
        "Secure Boot",
        "OTA Security Updates",
      ],
      badge: "Secure",
    },
  ];

  // Steps for LoRaWAN Console
  const consoleSteps = [
    {
      step: "1",
      title: "Register Gateway",
      description: "Add Semtech Packet Forwarder compatible gateways",
      icon: <RadioTower size={20} />,
    },
    {
      step: "2",
      title: "Create Applications",
      description: "Set up your IoT applications and workflows",
      icon: <Code size={20} />,
    },
    {
      step: "3",
      title: "Add Devices",
      description: "Register and configure your end devices",
      icon: <Cpu size={20} />,
    },
    {
      step: "4",
      title: "Monitor Traffic",
      description: "Real-time uplink/downlink data monitoring",
      icon: <Eye size={20} />,
    },
    {
      step: "5",
      title: "Integration",
      description: "Seamless integration with your applications",
      icon: <GitBranch size={20} />,
    },
  ];

  // Compatible Gateways
  const compatibleGateways = [
    {
      name: "ClodPi Outdoor Gateway",
      type: "Industrial",
      icon: <RadioTower size={16} />,
    },
    {
      name: "ClodPi Indoor Gateway",
      type: "Enterprise",
      icon: <Wifi size={16} />,
    },
    {
      name: "Third-party Gateways",
      type: "Semtech Compatible",
      icon: <Network size={16} />,
    },
  ];

  return (
    <section
      id="solutions"
      className="relative min-h-screen overflow-hidden mt-20"
      data-aos="fade-up"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
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
              <Layers size={18} style={{ color: colors.primary }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.primary }}
              >
                Our Solutions
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
                IoT Solutions &
              </span>
            </span>
            <br />
            <span className="relative">
              <span
                className="relative z-10 text-4xl md:text-5xl lg:text-6xl"
                style={{ color: colors.dark }}
              >
                Platform Services
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
                End-to-end IoT solutions and platform services designed to
                simplify your IoT deployment and accelerate time-to-market.
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/30 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Badge */}
              {solution.badge && (
                <div className="absolute top-6 right-6 z-30">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                    style={{ background: solution.gradient }}
                  >
                    {solution.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ background: solution.gradient }}
              >
                <div className="text-white">{solution.icon}</div>
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.dark }}
              >
                {solution.name}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {solution.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: solution.color }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.dark }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button
                className="w-full py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group/btn flex items-center justify-center gap-3"
                style={{
                  background: solution.gradient,
                  color: "white",
                }}
                onClick={
                  solution.id === "console" ? handleConsoleRedirect : undefined
                }
              >
                <span>
                  {solution.id === "console" ? "Open Console" : "Learn More"}
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-2 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>

        {/* LoRaWAN Console Detailed Section */}
        <div
          className="rounded-3xl overflow-hidden backdrop-blur-xl border border-white/30 p-10 md:p-16 mb-20"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ background: gradients.primary }}
                >
                  <Terminal size={28} color="white" />
                </div>
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: colors.dark }}
                  >
                    LoRaWAN Network Console
                  </h2>
                  <p className="text-lg" style={{ color: colors.primary }}>
                    Plug & Play Compatible
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                LoRaWAN Network Console is plug-play-compatible with very little
                configuration steps for ClodPi Labs LoRaWAN Gateways and other
                LoRaWAN Gateways compatible to "Semtech Packet Forwarder"
                standard in most cases forming bridge which connects end devices
                and gateways to your application.
              </p>

              <p className="text-lg leading-relaxed mb-10 text-gray-700">
                It understands the LoRaWAN specifications and the protocol,
                decrypts the data and thus your application need not worry about
                the complexities of LoRaWAN.
              </p>

              {/* Compatible Gateways */}
              <div className="mb-10">
                <h4
                  className="font-bold text-xl mb-6 flex items-center gap-3"
                  style={{ color: colors.dark }}
                >
                  <RadioTower size={20} style={{ color: colors.primary }} />
                  Compatible Gateways
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {compatibleGateways.map((gateway, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-2xl backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="mb-3 flex justify-center">
                        <div
                          className="p-2 rounded-lg"
                          style={{ background: `${colors.primary}20` }}
                        >
                          <div style={{ color: colors.primary }}>
                            {gateway.icon}
                          </div>
                        </div>
                      </div>
                      <div
                        className="font-bold text-sm mb-1"
                        style={{ color: colors.dark }}
                      >
                        {gateway.name}
                      </div>
                      <div
                        className="text-xs opacity-70"
                        style={{ color: colors.dark }}
                      >
                        {gateway.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleConsoleRedirect}
                className="group px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4 w-full justify-center"
                style={{
                  background: gradients.primary,
                  color: "white",
                  boxShadow: `0 10px 40px ${colors.primary}40`,
                }}
              >
                <span>Launch LoRaWAN Console</span>
                <ExternalLink className="w-5 h-5" />
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Right Content - Steps */}
            <div>
              <div
                className="p-8 rounded-3xl backdrop-blur-lg border border-white/30"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-10 text-center"
                  style={{ color: colors.dark }}
                >
                  Quick Setup Process
                </h3>

                <div className="space-y-6">
                  {consoleSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 p-6 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group/step"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {/* Step Number */}
                      <div className="relative">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg group-hover/step:scale-110 transition-transform duration-300"
                          style={{
                            background:
                              step.step === "1"
                                ? gradients.primary
                                : `${colors.primary}20`,
                            color: step.step === "1" ? "white" : colors.primary,
                          }}
                        >
                          {step.step}
                        </div>
                        {index < consoleSteps.length - 1 && (
                          <div
                            className="absolute left-1/2 top-full h-6 w-0.5 transform -translate-x-1/2"
                            style={{ background: `${colors.primary}30` }}
                          />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="p-2 rounded-lg"
                            style={{ background: `${colors.primary}15` }}
                          >
                            <div style={{ color: colors.primary }}>
                              {step.icon}
                            </div>
                          </div>
                          <h4
                            className="font-bold text-lg"
                            style={{ color: colors.dark }}
                          >
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div
                  className="mt-10 p-6 rounded-2xl backdrop-blur-sm border border-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h4
                    className="font-bold text-lg mb-3 flex items-center gap-2"
                    style={{ color: colors.dark }}
                  >
                    <InfoIcon size={18} style={{ color: colors.secondary }} />
                    Gateway Requirements
                  </h4>
                  <p className="text-sm text-gray-700">
                    Provide power and internet connection through either
                    Ethernet or 4G. Once gateway is powered and connected to
                    WAN, proceed with registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              style={{ background: gradients.secondary }}
            >
              <Users size={32} color="white" />
            </div>

            <h3
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: colors.dark }}
            >
              Need Custom IoT Solutions?
            </h3>

            <p
              className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"
              style={{ color: colors.dark }}
            >
              Our team can help you design and implement custom IoT solutions
              tailored to your specific business requirements.
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
                <span>Contact Sales</span>
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </button>

              <button
                className="px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: colors.primary,
                }}
              >
                <a
                  href="mailto:meetus@clodpi.io"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  <span>meetus@clodpi.io</span>
                </a>
              </button>
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

      <style>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Missing icon component
const InfoIcon = ({ size, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const Mail = ({ size, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default Solutions;
