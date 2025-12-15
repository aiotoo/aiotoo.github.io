import React from "react";
import {
  ArrowRight,
  Cpu,
  Wifi,
  Radio,
  Globe,
  Zap,
  MapPin,
  Shield,
  Activity,
} from "lucide-react";
import HeroImg from "../assets/cpHero.png";
import { colors, gradients } from "../constants/colors";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements - Full Width */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-150 h-150 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-100 h-100 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primary}20 1px, transparent 1px),
                             linear-gradient(to bottom, ${colors.primary}20 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main Content - Full Width */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content - IoT Focused */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Heading - Full Width Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]">
                <span className="block text-gray-800">India's Largest</span>
                <span className="relative inline-block mt-4">
                  <span
                    className="relative z-10 bg-clip-text text-transparent"
                    style={{ backgroundImage: gradients.primary }}
                  >
                    IoT Network
                  </span>
                  <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-linear-to-r from-blue-500/30 to-transparent rounded-full" />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Connecting millions of devices with{" "}
                <span className="font-semibold text-primary relative">
                  LoRaWAN® technology
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded-full" />
                </span>{" "}
                for smarter cities and sustainable industries.
              </p>
            </div>

            {/* Tech Stack Icons - Full Width Glassmorphism */}
            <div className="flex flex-wrap gap-4 pt-8">
              {[
                {
                  icon: Radio,
                  label: "LoRaWAN®",
                  color: colors.primary,
                  desc: "Long Range",
                },
                {
                  icon: Wifi,
                  label: "Wi-Fi 6",
                  color: colors.secondary,
                  desc: "High Speed",
                },
                {
                  icon: Globe,
                  label: "NB-IoT",
                  color: "#10B981",
                  desc: "Cellular IoT",
                },
                {
                  icon: Shield,
                  label: "Secure",
                  color: "#8B5CF6",
                  desc: "Encrypted",
                },
                {
                  icon: Zap,
                  label: "Low Power",
                  color: "#F59E0B",
                  desc: "10+ Years",
                },
                {
                  icon: MapPin,
                  label: "GPS",
                  color: "#EF4444",
                  desc: "Tracking",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-lg border border-white/30 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex-1 min-w-40"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="p-2.5 rounded-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <tech.icon
                      className="w-6 h-6"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {tech.label}
                    </div>
                    <div className="text-xs text-gray-600">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Full Width */}
            <div className="pt-10">
              <button
                className="group relative px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden flex-1"
                style={{
                  background: gradients.primary,
                  color: "white",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative flex items-center justify-center gap-4">
                  <Cpu className="w-7 h-7" />
                  <span className="text-lg sm:text-xl">
                    Start Your IoT Journey
                  </span>
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image - Full Screen */}
          <div className="relative lg:pl-8 xl:pl-16">
            {/* Floating Elements - Full Width */}
            <div className="absolute -top-8 -right-8 z-20">
              <div
                className="p-5 rounded-2xl backdrop-blur-lg border border-white/30 shadow-2xl animate-float"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  animationDelay: "1s",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      Ultra Low Power
                    </div>
                    <div className="text-sm text-gray-600">
                      10+ Years Battery
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-8 z-20">
              <div
                className="p-5 rounded-2xl backdrop-blur-lg border border-white/30 shadow-2xl animate-float"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  animationDelay: "2s",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      End-to-End
                    </div>
                    <div className="text-sm text-gray-600">Encrypted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Image Container - Full Width */}
            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden backdrop-blur-lg border border-white/30 shadow-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                }}
              >
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-shimmer" />

                <img
                  src={HeroImg}
                  alt="ClodPi Labs IoT Network Infrastructure"
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-1000"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Live Indicator - Full Width */}
              <div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30 px-8 py-3 rounded-full backdrop-blur-lg border border-white/30 shadow-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.25)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-300" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 tracking-wider">
                    REAL-TIME DATA STREAMING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles for animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
