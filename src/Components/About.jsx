import React from "react";
import {
  Cpu,
  Cloud,
  Server,
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
} from "lucide-react";
import Container from "./Container";
import { colors } from "../constants/colors";

const About = () => {

  // IoT Use Cases
  const useCases = [
    {
      name: "Energy Meter",
      icon: <Zap className="text-blue-600" size={20} />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      name: "Water Meter",
      icon: <div className="text-cyan-600">💧</div>,
      color: "bg-cyan-50 border-cyan-100",
    },
    {
      name: "Battery Management",
      icon: <Battery className="text-green-600" size={20} />,
      color: "bg-green-50 border-green-100",
    },
    {
      name: "Asset Tracker",
      icon: <MapPin className="text-red-600" size={20} />,
      color: "bg-red-50 border-red-100",
    },
  ];

  // Technology Comparison
  const legacyTech = [
    { name: "WiFi", limitation: "Short range, high power" },
    { name: "GSM", limitation: "High cost, power hungry" },
    { name: "ZigBee", limitation: "Limited range" },
  ];

  const nextGenTech = [
    {
      name: "LoRaWAN",
      features: ["Long range", "Low power", "Secure"],
      icon: <RadioTower className="text-blue-600" size={18} />,
    },
    {
      name: "NB-IoT",
      features: ["Cellular based", "Good penetration"],
      icon: <Network className="text-green-600" size={18} />,
    },
    {
      name: "Sigfox",
      features: ["Global network", "Simple devices"],
      icon: <Globe className="text-purple-600" size={18} />,
    },
    {
      name: "BLE 5 Mesh",
      features: ["Mesh networking", "High data rate"],
      icon: <Wifi className="text-orange-600" size={18} />,
    },
  ];

  // LoRaWAN Benefits
  const loraBenefits = [
    {
      icon: <Shield className="text-green-600" size={20} />,
      title: "Secure Communication",
      desc: "End-to-end encryption with mutual authentication",
    },
    {
      icon: <Globe className="text-blue-600" size={20} />,
      title: "Long Range",
      desc: "Up to 15km in rural areas, 5km in urban areas",
    },
    {
      icon: <Battery className="text-purple-600" size={20} />,
      title: "Low Power",
      desc: "Battery life up to 10 years",
    },
    {
      icon: <Database className="text-orange-600" size={20} />,
      title: "Scalability",
      desc: "Thousands of devices per gateway",
    },
    {
      icon: <Smartphone className="text-cyan-600" size={20} />,
      title: "Bidirectional",
      desc: "Full uplink and downlink communication",
    },
    {
      icon: <BarChart className="text-red-600" size={20} />,
      title: "Cost Effective",
      desc: "Low infrastructure and maintenance costs",
    },
  ];

  // Architecture Components
  const architecture = [
    { name: "Sensors/End Nodes", desc: "Capture data from assets", icon: "📡" },
    { name: "Gateways", desc: "Bridge between sensors and cloud", icon: "📶" },
    {
      name: "Cloud Platform",
      desc: "Store, analyze and manage data",
      icon: "☁️",
    },
    {
      name: "Applications",
      desc: "Visualize data and create alerts",
      icon: "📱",
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-white to-blue-50/30 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-primary/5 to-transparent"></div>

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
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">
              About ClodPi Labs
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Enabling IoT Success with{" "}
            <span className="text-primary relative">
              Long-Distance Connectivity
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary to-blue-300 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We are a startup with the objective to enable IoT businesses and
            products to succeed with relevant long-distance IoT connectivity
            technology, expanding across India with indigenous solutions.
          </p>
        </div>

        {/* Mission & Technology */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-blue-600 flex items-center justify-center">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark">Our Mission</h3>
                <p className="text-gray-500 text-sm">
                  Transforming India's IoT Landscape
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                ClodPi Labs has vast proven experience in LoRaWAN network setup
                and LoRa product design. We specialize in RF-based LPWAN systems
                for smart devices that can be operated remotely in alignment
                with smart city objectives.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Building className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">
                      Smart Infrastructure
                    </h4>
                    <p className="text-sm text-gray-600">
                      For cities, factories, farms & universities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <Lock className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">
                      Secure Deployment
                    </h4>
                    <p className="text-sm text-gray-600">
                      Public or private network options
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Comparison */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                <RadioTower className="text-primary" size={24} />
                IoT Technology Stack
              </h3>

              {/* Legacy Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  Traditional Solutions
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {legacyTech.map((tech, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="font-medium text-gray-800 mb-1">
                        {tech.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {tech.limitation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Gen Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  Next-Generation IoT Technologies
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {nextGenTech.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                        {tech.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-dark mb-2">
                          {tech.name}
                        </div>
                        <div className="space-y-1">
                          {tech.features.map((feature, i) => (
                            <div
                              key={i}
                              className="text-xs text-gray-600 flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Why <span className="text-primary">LoRaWAN®</span> for IoT?
            </h3>
            <p className="text-gray-600">
              LoRaWAN - a Low Power Wide Area Network (LPWAN) with
              specifications that achieve key IoT objectives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loraBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Smart Device Implementation
            </h3>
            <p className="text-gray-600">
              Our expertise includes development of smart devices/utilities for
              remote operation in accordance with smart city objectives
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`${useCase.color} p-4 rounded-xl text-center border hover:shadow-md transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="text-2xl mb-3 flex justify-center">
                  {useCase.icon}
                </div>
                <div className="font-medium text-dark text-sm md:text-base">
                  {useCase.name}
                </div>
                <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  IoT Use Case
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
