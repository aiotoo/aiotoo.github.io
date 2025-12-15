import React from "react";
import {
  RadioTower,
  ArrowRight,
  Sparkles,
  Cpu,
  Wifi,
  Globe,
} from "lucide-react";
import { colors, gradients } from "../constants/colors";
import { Link } from "react-router-dom";
import { backgroundIcons } from "../utils/backgroundIcons";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background with Icons */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-blue-50/30" />

        {/* Animated network lines */}
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

        {/* Floating background icons */}
        {backgroundIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.position} opacity-5 animate-float`}
            style={{ animationDelay: icon.delay }}
          >
            <icon.Icon
              className={`${icon.size}`}
              style={{ color: icon.color }}
            />
          </div>
        ))}

        {/* Animated connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          {backgroundIcons.slice(0, 6).map((_, index) => (
            <line
              key={index}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke={colors.primary}
              strokeWidth="0.5"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="20"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
          ))}
        </svg>

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full">
          <div
            className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </div>

        {/* Particle dots */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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

      {/* Main Content - Full Width */}
      <div className="relative z-10 w-full max-w-450 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Visual Column */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-16 -left-6 z-10">
              <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-blue-100 shadow-2xl animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-linear-to-br from-blue-500/10 to-blue-600/10">
                    <RadioTower
                      className="w-8 h-8"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: colors.primary }}
                    >
                      NETWORK
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: colors.dark }}
                    >
                      50+ Cities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating card */}
            <div className="absolute -bottom-16 -right-6 z-10">
              <div
                className="relative bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-green-100 shadow-2xl animate-float-slow"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-linear-to-br from-green-500/10 to-green-600/10">
                    <Cpu className="w-8 h-8" style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "#10B981" }}
                    >
                      DEVICES
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: colors.dark }}
                    >
                      1000+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Visual Card */}
            <div className="relative bg-linear-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden group">
              <div className="relative p-12">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold tracking-wider"
                        style={{ color: colors.primary }}
                      >
                        EST. 2020
                      </div>
                      <div
                        className="text-2xl font-bold"
                        style={{ color: colors.dark }}
                      >
                        Startup Vision
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#10B981" }}
                    >
                      GROWING
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <h3
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: colors.dark }}
                  >
                    Building India's{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: gradients.primary }}
                    >
                      IoT Infrastructure
                    </span>
                  </h3>

                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: colors.dark }}
                  >
                    We're expanding LoRa® network coverage across India with
                    indigenously designed hardware and custom software
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: colors.primary }}
                >
                  ABOUT CLODPI LABS
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="relative">
                  <span
                    className="relative z-10 bg-clip-text text-transparent"
                    style={{ backgroundImage: gradients.primary }}
                  >
                    Enabling IoT
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-linear-to-r from-blue-500/50 via-blue-500 to-blue-500/50 rounded-full" />
                </span>
                <br />
                <span
                  className="text-4xl md:text-5xl lg:text-6xl"
                  style={{ color: colors.dark }}
                >
                  Success in India
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-8">
              <div className="relative p-8 rounded-2xl bg-linear-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/20 shadow-xl group">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  {[RadioTower, Wifi, Globe].map((Icon, i) => (
                    <Icon
                      key={i}
                      className="absolute w-16 h-16"
                      style={{
                        color: colors.primary,
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        transform: `rotate(${i * 15}deg)`,
                      }}
                    />
                  ))}
                </div>

                <p
                  className="relative text-xl leading-relaxed z-10"
                  style={{ color: colors.dark }}
                >
                  We are a startup with the objective to enable IoT businesses
                  and products to succeed with relevant long-distance IoT
                  connectivity technology.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  to="/about-us"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    background: gradients.primary,
                    color: "white",
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative flex items-center justify-center gap-4">
                    <span className="text-lg">Explore Our Full Story</span>
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
