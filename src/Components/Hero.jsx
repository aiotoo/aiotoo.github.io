import React from "react";
import { ArrowRight, Wifi, Shield, Cpu, RadioTower } from "lucide-react";
import HeroImg from "../assets/cpHero.png";
import Container from "./Container";
import { colors } from "../constants/colors";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements - Updated with palette colors */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, ${colors.light} 0%, rgba(59, 130, 246, 0.05) 50%, ${colors.light} 100%)`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Network Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            backgroundColor: colors.primary,
          }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: `${colors.success}20`,
                  color: colors.success,
                  borderColor: `${colors.success}30`,
                }}
              >
                <Wifi className="mr-1" size={12} />
                IoT Connectivity Specialists
              </span>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: colors.dark }}
              >
                Powering India's{" "}
                <span className="relative">
                  <span className="relative z-10">IoT Revolution</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-3 opacity-50 z-0"
                    style={{
                      background: `linear-gradient(90deg, ${colors.secondary}30, transparent)`,
                    }}
                  ></span>
                </span>{" "}
                with{" "}
                <span
                  className="relative"
                  style={{ color: colors.primary }}
                >
                  LoRaWAN®
                  <span
                    className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  ></span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We specialize in <strong>Low Power Long Range</strong> sensor
                data network communication, utilizing cutting-edge technologies
                like <strong>LoRaWAN®</strong>, Z-Wave, Zigbee, and NB-IoT to
                enable IoT businesses and products to succeed.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Currently expanding{" "}
                <strong>LoRa® network coverage across India</strong> through
                indigenously designed hardware, custom software solutions, and
                nationwide infrastructure deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center group px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                }}
              >
                <Cpu className="mr-3" size={22} />
                Explore IoT Solutions
                <ArrowRight
                  className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </button>

              <button
                className="inline-flex items-center justify-center group px-8 py-4 text-lg rounded-lg transition-all duration-300"
                style={{
                  borderColor: colors.secondary,
                  borderWidth: "2px",
                  color: colors.secondary,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.secondary;
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = colors.secondary;
                }}
              >
                <Shield className="mr-3" size={22} />
                View Security
                <ArrowRight
                  className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image with Floating Elements */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative z-20">
              {/* Image with gradient overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, transparent, ${colors.secondary}10)`,
                  }}
                ></div>
                <img
                  src={HeroImg}
                  alt="ClodPi Labs IoT Connectivity Solutions"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Animated network overlay */}
                <div className="absolute inset-0 z-20 opacity-30">
                  <div
                    className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full animate-ping"
                    style={{
                      borderColor: colors.secondary,
                      borderWidth: "2px",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full animate-ping"
                    style={{
                      borderColor: colors.accent,
                      borderWidth: "2px",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 z-30">
                <div
                  className="text-white px-4 py-3 rounded-xl shadow-lg transform rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <RadioTower size={16} />
                    <span className="font-semibold">LoRaWAN®</span>
                  </div>
                  <div className="text-xs opacity-90">Certified Hardware</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 z-30">
                <div
                  className="text-white px-4 py-3 rounded-xl shadow-lg transform -rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${colors.success}, #059669)`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Cpu size={16} />
                    <span className="font-semibold">Made in India</span>
                  </div>
                  <div className="text-xs opacity-90">Indigenous Design</div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 rounded-full opacity-30 blur-xl animate-pulse"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary}20, transparent)`,
              }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full opacity-20 blur-xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}10, transparent)`,
              }}
            ></div>

            {/* Animated Network Nodes */}
            <div className="absolute top-1/3 left-0 z-0">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 rounded-full animate-bounce"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
                    left: `${i * 30}px`,
                    top: `${i * 15}px`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="absolute bottom-1/4 right-0 z-0">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full animate-bounce"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent}, #0891b2)`,
                    right: `${i * 25}px`,
                    bottom: `${i * 10}px`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Gradient Transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-0"
        style={{
          background: `linear-gradient(180deg, ${colors.light}, transparent)`,
        }}
      ></div>
    </section>
  );
};

export default Hero;