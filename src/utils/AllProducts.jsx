import CpHeroImage from "../assets/CPHH.png";
import CpigImage from "../assets/CPIG.png";
import HaImage from "../assets/HA.png";
import LteImage from "../assets/Battery.png";
import LwccImage from "../assets/LWCC.png";
import WaterMeterImage from "../assets/ClodPi Water Meter AMR.png";
import LightPiImage from "../assets/LPI.png";
import LwmbImage from "../assets/LWMB.png";
import CplhImage from "../assets/CplhImage.png";
import CpohImage from "../assets/CPOH.png";
import CphhidImage from "../assets/CPHHID.png";
import {
  RadioTower,
  Zap,
  Cpu,
  Target,
  Network,
  Router,
  Gauge,
  Wifi,
} from "lucide-react";
import { colors, gradients } from "../constants/colors";

// Main products data
export const allProducts = [
  {
    id: "cphh",
    name: "ClodPi Outdoor Gateway",
    type: "LoRaWAN Gateway",
    description:
      "Industrial grade outdoor gateway with weatherproof IP67 enclosure for harsh environments.",
    image: CpHeroImage,
    category: "gateway",
    technology: "LoRaWAN",
    features: ["IP67 Rated", "Industrial Grade", "PoE Support", "Weatherproof"],
    badge: "Best Seller",
    badgeColor: colors.primary,
  },
  {
    id: "cpig",
    name: "ClodPi Indoor Gateway",
    type: "LoRaWAN Gateway",
    description:
      "High-performance indoor gateway for enterprise and industrial deployments.",
    image: CpigImage,
    category: "gateway",
    technology: "LoRaWAN",
    features: ["Compact Design", "8-Channel", "Cloud Ready", "Web UI"],
    badge: "Popular",
    badgeColor: colors.secondary,
  },
  {
    id: "lwcc",
    name: "LoRaWAN Concentrator",
    type: "Gateway Component",
    description:
      "Certified multi-band concentrator card in Mini PCIe form factor.",
    image: LwccImage,
    category: "gateway",
    technology: "LoRaWAN",
    features: ["SX1302 Chipset", "WPC/FCC", "Mini PCIe", "Multi-band"],
    badge: "Certified",
    badgeColor: "#10b981",
  },
  {
    id: "waterMeter",
    name: "Water Meter Reader",
    type: "IoT Sensor",
    description:
      "Battery-operated AMR for magnetic and inductive sensors with 10+ year battery.",
    image: WaterMeterImage,
    category: "sensor",
    technology: "LoRaWAN",
    features: [
      "10+ Year Battery",
      "Magnetic Sensor",
      "IP68 Rated",
      "Low Power",
    ],
    badge: "Energy Saver",
    badgeColor: "#06b6d4",
  },
  {
    id: "lightpi",
    name: "LightPi Controller",
    type: "Smart Controller",
    description:
      "NEMA standard luminaire controller for smart street lighting solutions.",
    image: LightPiImage,
    category: "controller",
    technology: "LoRaWAN",
    features: [
      "NEMA Compatible",
      "Dimmer Control",
      "Energy Monitoring",
      "Group Control",
    ],
    badge: "Smart City",
    badgeColor: "#f59e0b",
  },
  {
    id: "lwmb",
    name: "Modbus Adapter",
    type: "Industrial Adapter",
    description:
      "RS485 to LoRaWAN converter for industrial automation systems.",
    image: LwmbImage,
    category: "adapter",
    technology: "LoRaWAN",
    features: [
      "RS485 Support",
      "Modbus RTU",
      "Industrial Grade",
      "Configurable",
    ],
    badge: "Industrial",
    badgeColor: "#6b7280",
  },
  {
    id: "cplh",
    name: "ClodPi Light Hotspot",
    type: "Helium Hotspot",
    description:
      "Helium-compatible indoor hotspot with optimized antenna design.",
    image: CplhImage,
    category: "hotspot",
    technology: "Helium",
    features: ["Helium Approved", "Compact", "Easy Setup", "Optimized"],
    badge: "Helium Approved",
    badgeColor: "#10b981",
  },
  {
    id: "cpoh",
    name: "Outdoor Helium Hotspot",
    type: "Helium Hotspot",
    description:
      "Industrial outdoor hotspot built for harsh environmental conditions.",
    image: CpohImage,
    category: "hotspot",
    technology: "Helium",
    features: ["Outdoor Rated", "IP67", "PoE Support", "Industrial"],
    badge: "Premium",
    badgeColor: colors.primary,
  },
  {
    id: "cphhid",
    name: "Indoor Hotspot",
    type: "Helium Hotspot",
    description:
      "High-performance indoor hotspot for maximum mining efficiency.",
    image: CphhidImage,
    category: "hotspot",
    technology: "Helium",
    features: [
      "High Performance",
      "Rugged Design",
      "Efficient",
      "Thermal Management",
    ],
    badge: "High Performance",
    badgeColor: colors.secondary,
  },
  {
    id: "ha",
    name: "ATOM Hub",
    type: "Smart Hub",
    description:
      "Multi-protocol hub supporting Zigbee, Thread, Matter, and Bluetooth.",
    image: HaImage,
    category: "hub",
    technology: "Multi-protocol",
    features: [
      "Multi-Protocol",
      "Home Assistant",
      "Zigbee",
      "Thread",
      "Matter",
    ],
    badge: "Smart Home",
    badgeColor: "#8b5cf6",
  },
  {
    id: "lte",
    name: "LTE Module",
    type: "Communication Module",
    description: "Ultra-low power LTE module for smart meter applications.",
    image: LteImage,
    category: "module",
    technology: "LTE",
    features: ["LTE Cat-M1", "Low Power", "10+ Year Battery", "Compact"],
    badge: "Long Battery",
    badgeColor: "#06b6d4",
  },
];

// Dynamically calculate category counts
const getCategoryCount = (categoryId) => {
  return allProducts.filter((product) => product.category === categoryId)
    .length;
};

// Product categories with icons and dynamic counts
export const productCategories = [
  {
    id: "all",
    name: "All Products",
    icon: <Cpu size={18} />,
    count: allProducts.length,
    gradient: gradients.primary,
  },
  {
    id: "gateway",
    name: "Gateways",
    icon: <RadioTower size={18} />,
    count: getCategoryCount("gateway"),
    gradient: gradients.secondary,
  },
  {
    id: "hotspot",
    name: "Hotspots",
    icon: <Zap size={18} />,
    count: getCategoryCount("hotspot"),
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    id: "sensor",
    name: "Sensors",
    icon: <Network size={18} />,
    count: getCategoryCount("sensor"),
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    id: "controller",
    name: "Controllers",
    icon: <Target size={18} />,
    count: getCategoryCount("controller"),
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
  },
  {
    id: "adapter",
    name: "Adapters",
    icon: <Router size={18} />,
    count: getCategoryCount("adapter"),
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    id: "hub",
    name: "Hubs",
    icon: <Wifi size={18} />,
    count: getCategoryCount("hub"),
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    id: "module",
    name: "Modules",
    icon: <Gauge size={18} />,
    count: getCategoryCount("module"),
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
  },
];
