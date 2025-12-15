import CpHeroImage from "../assets/CPHH.png";
import cphhIp6 from "../assets/cphh-ip6.png";
import CpiGateway from "../assets/CpiGateway.png";
import cphhFeature from "../assets/cphh-Feature.png";
import atomHero from "../assets/HA.png";
import atomBack from "../assets/ATOM-Hub-TopBack.png";
import atomFront from "../assets/HaFront.png";
import atomDimension1 from "../assets/HaD1.png";
import atomDimension2 from "../assets/HaD2.png";
import HaSpecs from "../assets/HaSpec.png";
import lteHero from "../assets/Battery.png";
import lteDevBoard from "../assets/LteDev.png";
import lteWater from "../assets/Water-Meter-ClodPi.png";
import lteGas from "../assets/Gas-Meter-ClodPi.png";
import lteSpecsImg from "../assets/Lte-DBS.png";
import lwccHero from "../assets/LWCC.png";
import sx1302Img from "../assets/Ic.png";
import icCert from "../assets/ic.png";
import wpcCert from "../assets/WPC.png";
import fccCert from "../assets/FCC.png";
import rcmCert from "../assets/RCM.png";
import amrHero from "../assets/waterMeterAMR.png";
import amrHowItWorks from "../assets/amrHowItWorks.png";
import leakageImg from "../assets/WaterLeakage.png";
import billingImg from "../assets/BillGeneration.png";
import consumptionImg from "../assets/WaterConsumption.png";
import lightpiHero from "../assets/LPI.png";
import lightpiConnector from "../assets/LightPiConnector.png";
import heliumIndoorHero from "../assets/CPIG.png";
import heliumIndoorAlt from "../assets/CPIGFront.png";
import heliumLogo from "../assets/CPIGBack.png";
import heliumNetwork from "../assets/CPIGSide.png";
import CpiOH from "../assets/CpiOH.png";

import {
  Clock,
  Lightbulb,
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
  Bluetooth,
  Usb,
  Power,
  Layers,
  Battery,
  Activity,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  FileText,
  TrendingUp,
  Gauge,
  Antenna,
  Fan,
} from "lucide-react";
import { colors, gradients } from "../constants/colors";

export const ProductCollections = {
  cphh: {
    id: "cphh",
    name: "ClodPi Outdoor Gateway",
    type: "LoRaWAN Gateway",
    tagline: "Industrial Outdoor Gateway for LoRaWAN®",
    description:
      "ClodPi Outdoor Gateway is articulately designed with robust architecture combining the leading LoRaWAN® wireless protocol compatible with all the LoRaWAN® nodes or devices. It is optimized for miles of range, and long battery life for IoT devices.",
    detailedDescription:
      "The ClodPi Outdoor Gateway - Ready for outdoor deployment - opens up an abundance of opportunities, allowing the ability to mount the Gateway onto the side of buildings, houses and roofs - an ideal solution for wider coverage applications across villages, towns and cities.",
    image: CpHeroImage,
    category: "gateway",
    technology: "LoRaWAN",

    // Main Features
    mainFeatures: [
      {
        icon: <Shield size={20} />,
        title: "Lightning Protection",
        desc: "Built-in surge protection for outdoor deployment",
        color: colors.primary,
      },
      {
        icon: <Zap size={20} />,
        title: "Power over Ethernet",
        desc: "48V PoE 803.2at compatible",
        color: colors.secondary,
      },
      {
        icon: <Droplets size={20} />,
        title: "IP67 Rated",
        desc: "Water and dust resistant enclosure",
        color: "#10B981",
      },
      {
        icon: <Wifi size={20} />,
        title: "4G Compatible",
        desc: "Upgradable cellular backhaul",
        color: "#8B5CF6",
      },
      {
        icon: <Thermometer size={20} />,
        title: "Lower Power Consumption",
        desc: "Energy efficient operation",
        color: "#F59E0B",
      },
      {
        icon: <RadioTower size={20} />,
        title: "Multi-Channel",
        desc: "Simultaneous frequency support",
        color: "#EF4444",
      },
      {
        icon: <Globe size={20} />,
        title: "Longer Distance",
        desc: "Extended range coverage",
        color: "#06B6D4",
      },
      {
        icon: <Wind size={20} />,
        title: "Natural Cooling",
        desc: "Dual breather design",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      { label: "LoRa Concentrator", value: "SX1302", icon: <Cpu size={16} /> },
      { label: "Ethernet", value: "RJ45 IP-67", icon: <HardDrive size={16} /> },
      { label: "WiFi", value: "Only for onboarding", icon: <Wifi size={16} /> },
      { label: "Power", value: "48V PoE 803.2at", icon: <Zap size={16} /> },
      {
        label: "Antenna",
        value: "Fiber Glass Outdoor",
        icon: <RadioTower size={16} />,
      },
      { label: "4G", value: "Upgradable", icon: <Globe size={16} /> },
    ],

    // Enclosure Details
    enclosure: {
      material: "Acrylonitrile Styrene Acrylate (ASA)",
      features: ["UV rays resistant", "Chemicals resistant", "Weatherproof"],
    },

    // Stats
    stats: [
      {
        value: "1533+",
        label: "Gateways Deployed",
        icon: <RadioTower size={20} />,
      },
      { value: "621+", label: "4G Backhaul", icon: <Globe size={20} /> },
      { value: "126+", label: "Customers", icon: <Cloud size={20} /> },
    ],

    // Images
    additionalImages: [cphhIp6, cphhFeature, CpiGateway],

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  ha: {
    id: "ha",
    name: "ATOM Hub",
    type: "Automation Hub",
    tagline: "For Home Assistant",
    description:
      "ATOM Hub is a powerful local home automation controller designed for Home Assistant, enabling secure, fast, and cloud-independent smart home control.",
    detailedDescription:
      "ATOM Hub acts as a centralized automation hub by integrating multiple smart devices and services into a single, locally controlled ecosystem. Built on Raspberry Pi CM4 with integrated Zigbee, Thread, and Matter support, it ensures high reliability, security, and performance without dependency on cloud services.",

    image: atomHero,
    category: "automation",
    technology: "Zigbee • Thread • Matter • Home Assistant",

    // Main Features
    mainFeatures: [
      {
        icon: <Cpu size={20} />,
        title: "Raspberry Pi CM4",
        desc: "Quad-core Cortex-A72, 4GB RAM, 32GB eMMC",
        color: "#6366F1",
      },
      {
        icon: <RadioTower size={20} />,
        title: "Zigbee & Thread",
        desc: "Dual Silicon Labs MGM210P radios",
        color: "#10B981",
      },
      {
        icon: <Layers size={20} />,
        title: "Matter Ready",
        desc: "Supports OpenThread & Matter",
        color: "#F59E0B",
      },
      {
        icon: <HardDrive size={20} />,
        title: "NVMe Expansion",
        desc: "M.2 NVMe SSD support",
        color: "#EF4444",
      },
      {
        icon: <Wifi size={20} />,
        title: "Wi-Fi & Bluetooth",
        desc: "Dual-band Wi-Fi + Bluetooth 5.0",
        color: "#06B6D4",
      },
      {
        icon: <Globe size={20} />,
        title: "Local Control",
        desc: "No cloud or internet dependency",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      {
        label: "Processor",
        value: "Quad-core Cortex-A72 1.5 GHz",
        icon: <Cpu size={16} />,
      },
      { label: "RAM", value: "4 GB", icon: <Layers size={16} /> },
      { label: "Storage", value: "32 GB eMMC", icon: <HardDrive size={16} /> },
      {
        label: "Wi-Fi",
        value: "2.4 / 5.0 GHz 802.11 b/g/n/ac",
        icon: <Wifi size={16} />,
      },
      {
        label: "Bluetooth",
        value: "Bluetooth 5.0 / BLE",
        icon: <Bluetooth size={16} />,
      },
      {
        label: "Ethernet",
        value: "Gigabit Ethernet",
        icon: <Globe size={16} />,
      },
      { label: "USB", value: "2 × USB 2.0 Type-A", icon: <Usb size={16} /> },
      { label: "Power", value: "12V / 2A DC Jack", icon: <Power size={16} /> },
    ],

    // Wireless Modules
    wireless: [
      {
        name: "MGM210P – Zigbee",
        details: ["Zigbee 3.0", "+20 dBm TX power", "1024 KB Flash, 96 KB RAM"],
      },
      {
        name: "MGM210P – Thread",
        details: [
          "OpenThread & Matter",
          "+20 dBm TX power",
          "Upgradeable firmware",
        ],
      },
    ],

    // Expansion
    expansion: {
      slot: "M.2 NVMe (M-Key)",
      support: ["2242", "2260", "2280"],
      interface: "PCIe x1",
    },

    // Enclosure
    enclosure: {
      material: "ABS Plastic",
      color: "White",
      dimensions: "150 mm × 100 mm × 30 mm",
      features: ["Custom heat sink included"],
    },

    // Power Consumption
    powerConsumption: [
      { mode: "Idle", value: "~1.5 W" },
      { mode: "Idle with NVMe", value: "~2.5 W" },
      { mode: "Load", value: "5–9 W" },
    ],

    // Images
    additionalImages: [
      atomBack,
      atomFront,
      atomDimension1,
      atomDimension2,
      HaSpecs,
    ],

    // Documents
    documents: [
      { title: "ATOM Hub Home Assistant User Manual" },
      { title: "CR2032 RTC Battery Installation" },
      { title: "Z-Wave Configuration Guide" },
      { title: "Raspberry Pi Reflash Guide" },
      { title: "Zigbee Configuration Guide" },
      { title: "OpenThread Add-on Configuration" },
    ],

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  lte: {
    id: "lte",
    name: "Battery-operated LTE Module",
    type: "AMI / AMR Communication Module",
    tagline: "Suitable for Water & Gas Meters",
    description:
      "The ClodPi Labs Battery-operated LTE Module is an easy-to-integrate communication module for pulse output meters, enabling remote meter readings for water and gas applications.",
    detailedDescription:
      "Designed for AMI and AMR applications, the ClodPi Battery-operated LTE Module works with any brand, size, or version of water and gas meters equipped with pulse output. With ultra-low power consumption and LTE CAT1 connectivity, it delivers reliable long-term field deployment with up to 10 years of battery life depending on usage.",

    image: lteHero,
    category: "module",
    technology: "LTE CAT1",

    // Main Features
    mainFeatures: [
      {
        icon: <Battery size={20} />,
        title: "Long Battery Life",
        desc: "Up to 10 years battery life*",
        color: "#10B981",
      },
      {
        icon: <Activity size={20} />,
        title: "Ultra-low Power",
        desc: "9µA sleep current",
        color: "#6366F1",
      },
      {
        icon: <RadioTower size={20} />,
        title: "LTE CAT1",
        desc: "Reliable cellular connectivity",
        color: "#EF4444",
      },
      {
        icon: <Layers size={20} />,
        title: "Pulse Inputs",
        desc: "Supports up to 3 pulse inputs",
        color: "#F59E0B",
      },
      {
        icon: <Cpu size={20} />,
        title: "Multiple Interfaces",
        desc: "RS485, UART, GPIO, NFC",
        color: "#06B6D4",
      },
      {
        icon: <HardDrive size={20} />,
        title: "Data Storage",
        desc: "Micro SD & FRAM support",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      { label: "Cellular", value: "LTE CAT1", icon: <RadioTower size={16} /> },
      { label: "Sleep Current", value: "9 µA", icon: <Activity size={16} /> },
      {
        label: "Battery",
        value: "Battery operated",
        icon: <Battery size={16} />,
      },
      { label: "Pulse Inputs", value: "3 × Pulse", icon: <Layers size={16} /> },
      { label: "RS485", value: "Supported", icon: <Cpu size={16} /> },
      { label: "UART", value: "2 × UART", icon: <Cpu size={16} /> },
      { label: "GPIOs", value: "Available", icon: <Layers size={16} /> },
      {
        label: "Storage",
        value: "Micro SD + FRAM",
        icon: <HardDrive size={16} />,
      },
      { label: "SIM", value: "Nano SIM Connector", icon: <Globe size={16} /> },
    ],

    // Sensors & Interfaces
    interfaces: [
      "RS485",
      "GPS",
      "NFC",
      "Hall Sensor",
      "GPIOs",
      "2 × UART",
      "Micro SD",
      "FRAM",
    ],

    // Applications
    applications: [
      {
        title: "Water Meter",
        image: lteWater,
      },
      {
        title: "Gas Meter",
        image: lteGas,
      },
    ],

    // Development Board
    developmentBoard: {
      name: "ClodPi LTE Development Board",
      image: lteDevBoard,
      features: [
        "LTE CAT1",
        "Pulse Inputs",
        "RS485",
        "GPS",
        "NFC",
        "Battery operated",
      ],
    },

    // Images
    additionalImages: [lteSpecsImg, lteDevBoard, lteWater, lteGas],

    // Notes
    notes: ["* Battery life depends on number of data transmissions per day"],

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  lwcc: {
    id: "lwcc",
    name: "LoRaWAN® Concentrator Card",
    type: "Mini PCIe Concentrator",
    tagline: "SX1302/3 Mini PCIe Gateway Card",
    description:
      "ClodPi Labs LoRaWAN® Concentrator mini PCIe card enables OEMs and system integrators to build high-performance, certified LoRaWAN® gateway solutions.",
    detailedDescription:
      "Based on Semtech SX1302 Core Cell design, the ClodPi LoRaWAN® Concentrator Card allows retrofitting existing routers and edge devices with LoRaWAN® gateway capabilities. Its compact mini PCIe form factor ensures low power consumption, simplified thermal design, and broad deployment flexibility.",

    image: lwccHero,
    category: "concentrator",
    technology: "LoRaWAN® SX1302 / SX1303",

    // Main Features
    mainFeatures: [
      {
        icon: <Cpu size={20} />,
        title: "SX1302/3 Core Cell",
        desc: "Next-generation LoRa® gateway baseband",
        color: "#6366F1",
      },
      {
        icon: <Layers size={20} />,
        title: "Mini PCIe Form Factor",
        desc: "Standard mini PCIe interface",
        color: "#10B981",
      },
      {
        icon: <Zap size={20} />,
        title: "Low Power Consumption",
        desc: "Optimized for thermal efficiency",
        color: "#F59E0B",
      },
      {
        icon: <RadioTower size={20} />,
        title: "Multiple Channels",
        desc: "High-capacity gateway performance",
        color: "#EF4444",
      },
      {
        icon: <Globe size={20} />,
        title: "Long Range",
        desc: "Extended LoRaWAN® coverage",
        color: "#06B6D4",
      },
      {
        icon: <HardDrive size={20} />,
        title: "Upgradeable Firmware",
        desc: "USB DFU supported (USB version)",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      {
        label: "Baseband",
        value: "Semtech SX1302 / SX1303",
        icon: <Cpu size={16} />,
      },
      {
        label: "RF Front-End",
        value: "2 × SX1250 + 1 × SX1261",
        icon: <RadioTower size={16} />,
      },
      {
        label: "Form Factor",
        value: "Standard Mini PCIe",
        icon: <Layers size={16} />,
      },
      {
        label: "Interfaces",
        value: "USB / SPI / I2C / GPIO",
        icon: <HardDrive size={16} />,
      },
      {
        label: "Output Power",
        value: "Up to +27 dBm",
        icon: <Zap size={16} />,
      },
      {
        label: "LBT",
        value: "Listen Before Talk supported",
        icon: <ShieldCheck size={16} />,
      },
    ],

    // Frequency Variants
    variants: [
      {
        region: "IN865",
        certification: "WPC",
      },
      {
        region: "US915",
        certification: "FCC / IC",
      },
      {
        region: "Global",
        certification: "RCM",
      },
    ],

    // Applications
    applications: [
      "IoT & IIoT",
      "Machine to Machine (M2M)",
      "Smart City",
      "Home & Building Automation",
      "Industrial Monitoring & Control",
      "Street Light Monitoring",
      "Agricultural Monitoring",
      "Wireless Alarm & Security",
      "Asset Tracking",
    ],

    // Certifications
    certifications: [
      { name: "IC", image: icCert },
      { name: "WPC", image: wpcCert },
      { name: "FCC", image: fccCert },
      { name: "RCM", image: rcmCert },
    ],

    // Images
    additionalImages: [sx1302Img],

    // Deployment Stats
    stats: [
      { value: "2951+", label: "IN865 Cards Deployed" },
      { value: "1250+", label: "US915 Cards Deployed" },
      { value: "3600+", label: "Global Deployments" },
    ],

    // Documents
    documents: [{ title: "Full Specification Sheet" }],

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  waterMeter: {
    id: "waterMeter",
    name: "Water Meter Reader AMR",
    type: "Automated Meter Reading Solution",
    tagline: "Smart Water Metering for Sustainable Usage",
    description:
      "ClodPi Labs Water Meter Reader AMR is a smart water metering solution designed to measure, monitor, and optimize water consumption for residential, commercial, and industrial environments.",
    detailedDescription:
      "Powered by Grafo, the Water Meter Reader AMR enables organizations to monitor real-time and historical water consumption patterns via a cloud-based dashboard. The solution helps reduce water wastage, identify inefficiencies, control operational costs, and promote sustainable water usage practices.",

    image: amrHero,
    category: "solution",
    technology: "AMR • Cloud Dashboard",

    // How it works
    workflow: {
      description:
        "Once installed and configured, the AMR devices continuously capture water consumption data and publish it to the dashboard, enabling monitoring, analytics, and actionable insights.",
      image: amrHowItWorks,
    },

    // Main Features
    mainFeatures: [
      {
        icon: <AlertTriangle size={20} />,
        title: "Leakage Detection",
        desc: "Identify illegal usage, invisible leaks, and abnormal consumption",
        color: "#EF4444",
      },
      {
        icon: <FileText size={20} />,
        title: "Bill Generation",
        desc: "Daily consumption-based billing calculations",
        color: "#6366F1",
      },
      {
        icon: <BarChart3 size={20} />,
        title: "Historical Consumption",
        desc: "Analyze previous days’ water usage patterns",
        color: "#10B981",
      },
      {
        icon: <Cloud size={20} />,
        title: "Cloud Dashboard",
        desc: "Online interface to monitor and manage water usage",
        color: "#06B6D4",
      },
      {
        icon: <TrendingUp size={20} />,
        title: "Trend Analysis",
        desc: "Consumption trends for forecasting demand and supply",
        color: "#F59E0B",
      },
      {
        icon: <Gauge size={20} />,
        title: "Operational Optimization",
        desc: "Reduce costs and improve water efficiency",
        color: "#8B5CF6",
      },
    ],

    // Feature Visuals
    featureVisuals: [
      {
        title: "Identify Water Leakage",
        image: leakageImg,
      },
      {
        title: "Bill Generation",
        image: billingImg,
      },
      {
        title: "Water Consumption History",
        image: consumptionImg,
      },
    ],

    // User Benefits
    benefits: [
      "Identify high water usage (Daily / Weekly / Monthly)",
      "Monitor impact of water-saving initiatives",
      "Control operational costs",
      "Fast and easy implementation",
      "Enable water conservation ideas",
      "Cloud-based managed service",
      "Site-wise water consumption data",
      "Past consumption data and trend analysis",
    ],

    // Applications
    applications: [
      "Residential Buildings",
      "Commercial Buildings",
      "Industrial Plants",
      "Factories",
      "Campuses & Townships",
    ],

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  lightpi: {
    id: "lightpi",
    name: "LightPi",
    type: "NEMA Light Controller",
    tagline: "Smart Street Lighting Controller",
    description:
      "LightPi Lighting NEMA Controller® is a reliable remote lighting controller leveraging the LoRaWAN® platform to ensure efficient, automated, and intelligent street lighting management.",
    detailedDescription:
      "Designed for easy retrofitting into existing LED street lights, LightPi transforms conventional lighting infrastructure into a smart, connected network. It enables remote control, dimming, monitoring, and optimization of lighting operations, significantly reducing energy consumption and operational costs.",

    image: lightpiHero,
    category: "controller",
    technology: "LoRaWAN®",

    // Main Features
    mainFeatures: [
      {
        icon: <RadioTower size={20} />,
        title: "LoRa Communication",
        desc: "Reliable long-range wireless connectivity",
        color: "#6366F1",
      },
      {
        icon: <Lightbulb size={20} />,
        title: "NEMA Compatibility",
        desc: "Standard NEMA luminaire interface",
        color: "#10B981",
      },
      {
        icon: <Power size={20} />,
        title: "Remote Control",
        desc: "Switch On/Off and dim lights remotely",
        color: "#F59E0B",
      },
      {
        icon: <Zap size={20} />,
        title: "0–10V Dimming",
        desc: "Supports industry-standard dimming protocol",
        color: "#EF4444",
      },
      {
        icon: <Shield size={20} />,
        title: "Outdoor Grade",
        desc: "UV protected, IP66-rated enclosure",
        color: "#06B6D4",
      },
      {
        icon: <Clock size={20} />,
        title: "Scheduled Operation",
        desc: "Clock & calendar-based luminaire control",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      {
        label: "Communication",
        value: "LoRaWAN®",
        icon: <RadioTower size={16} />,
      },
      { label: "Dimming", value: "0–10 V", icon: <Zap size={16} /> },
      {
        label: "Ingress Protection",
        value: "IP66",
        icon: <Shield size={16} />,
      },
      {
        label: "Mounting",
        value: "NEMA Standard",
        icon: <Lightbulb size={16} />,
      },
      {
        label: "Energy Metering",
        value: "Per-light consumption monitoring",
        icon: <Globe size={16} />,
      },
      {
        label: "Management",
        value: "Remote monitoring & control",
        icon: <Clock size={16} />,
      },
    ],

    // Benefits
    benefits: [
      "Approximately 50% operational cost savings",
      "Reduction in energy waste and light pollution",
      "Supports SMART City initiatives",
      "Easy retrofit into existing street lights",
      "Improved energy efficiency and sustainability",
    ],

    // Customization
    customization: {
      description:
        "LightPi is an in-house designed smart street lighting controller and can be customized based on site topography, environmental parameters, and local compliance requirements.",
    },

    // Images
    additionalImages: [lightpiConnector],

    // Documents
    // documents: [{ title: "LightPi Product Leaflet", file: lightpiLeaflet }],

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  cplh: {
    id: "cplh",
    name: "Indoor Light Hotspot",
    type: "Helium Hotspot",
    tagline: "Indoor LoRaWAN® Hotspot for Helium Network",
    description:
      "ClodPi Indoor Light Hotspot enables individuals and organizations to participate in the Helium Network by providing miles of LoRaWAN® wireless coverage for IoT devices.",
    detailedDescription:
      "Designed for indoor deployment, the ClodPi Indoor Light Hotspot is a compact, energy-efficient Helium-compatible gateway. It supports reliable Ethernet connectivity, secure onboarding via Wi-Fi, and natural cooling for long-term operation while expanding decentralized wireless infrastructure.",

    image: heliumIndoorHero,
    category: "gateway",
    technology: "LoRaWAN® • Helium",

    // Branding
    network: {
      name: "Helium",
      logo: heliumLogo,
    },

    // Main Features
    mainFeatures: [
      {
        icon: <RadioTower size={20} />,
        title: "Helium Compatible",
        desc: "Supports Helium Light Hotspot network",
        color: "#6366F1",
      },
      {
        icon: <Globe size={20} />,
        title: "Ethernet Backhaul",
        desc: "10/100 Mbps Ethernet connectivity",
        color: "#10B981",
      },
      {
        icon: <Wifi size={20} />,
        title: "Wi-Fi Onboarding",
        desc: "2.4 GHz Wi-Fi for initial setup",
        color: "#06B6D4",
      },
      {
        icon: <Zap size={20} />,
        title: "Low Power Operation",
        desc: "12V DC power input",
        color: "#F59E0B",
      },
      {
        icon: <Antenna size={20} />,
        title: "External Antenna",
        desc: "SMA Female connector with 3.5 dBi antenna",
        color: "#EF4444",
      },
      {
        icon: <Fan size={20} />,
        title: "Natural Cooling",
        desc: "Vent-based thermal design",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      {
        label: "LoRa Concentrator",
        value: "SX1302",
        icon: <RadioTower size={16} />,
      },
      {
        label: "Ethernet",
        value: "10 / 100 Mbps",
        icon: <Globe size={16} />,
      },
      {
        label: "Wi-Fi",
        value: "2.4 GHz (Onboarding only)",
        icon: <Wifi size={16} />,
      },
      {
        label: "Power Supply",
        value: "12V DC",
        icon: <Zap size={16} />,
      },
      {
        label: "Antenna",
        value: "3.5 dBi Rubber Duck",
        icon: <Antenna size={16} />,
      },
    ],

    // Connectivity
    connectivity: ["Ethernet", "LoRaWAN®", "Helium Network"],

    // Images
    additionalImages: [heliumIndoorAlt, heliumNetwork],

    // Documents
    documents: [{ title: "Getting Started Guide" }],

    // Purchase
    purchase: {
      cta: "Buy Now",
      shop: true,
    },

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },

  cpoh: {
    id: "cpoh",
    name: "ClodPi Pro Hotspot",
    type: "Outdoor Helium Hotspot",
    tagline: "Helium LongFi™ Outdoor LoRaWAN® Gateway",
    description:
      "ClodPi Pro Hotspot is an industrial-grade outdoor gateway combining LoRaWAN® wireless protocol with Helium LongFi™ and Helium Blockchain technology for long-range, low-power IoT connectivity.",
    detailedDescription:
      "Designed for outdoor deployment, the ClodPi Pro Hotspot can be mounted on buildings, rooftops, and towers to provide wide-area coverage across villages, towns, and cities. With robust IP67 enclosure, PoE support, and optional 4G backhaul, it is ideal for reliable Helium network expansion.",

    image: CpHeroImage,
    category: "gateway",
    technology: "LoRaWAN® • Helium LongFi™",

    // Main Features
    mainFeatures: [
      {
        icon: <Shield size={20} />,
        title: "Lightning Protection",
        desc: "Built-in surge protection for outdoor use",
        color: "#EF4444",
      },
      {
        icon: <Zap size={20} />,
        title: "Power over Ethernet",
        desc: "48V PoE 803.2at supported",
        color: "#6366F1",
      },
      {
        icon: <Shield size={20} />,
        title: "IP67 Rated",
        desc: "Waterproof and dust-resistant enclosure",
        color: "#10B981",
      },
      {
        icon: <Globe size={20} />,
        title: "4G Compatible",
        desc: "Upgradable cellular backhaul",
        color: "#06B6D4",
      },
      {
        icon: <RadioTower size={20} />,
        title: "Long Range Coverage",
        desc: "Optimized for miles of wireless range",
        color: "#F59E0B",
      },
      {
        icon: <Wind size={20} />,
        title: "Natural Cooling",
        desc: "Dual breather design",
        color: "#8B5CF6",
      },
    ],

    // Specifications
    specifications: [
      {
        label: "LoRa Concentrator",
        value: "SX1302",
        icon: <RadioTower size={16} />,
      },
      {
        label: "Processor",
        value:
          "ARM 64-bit Hexa-core (Quad Cortex-A53 up to 1.4GHz + Dual Cortex-A72 up to 1.8GHz)",
        icon: <Cpu size={16} />,
      },
      {
        label: "Memory",
        value: "4GB RAM / 64GB eMMC",
        icon: <HardDrive size={16} />,
      },
      {
        label: "Ethernet",
        value: "Gigabit Ethernet (RJ45 IP67)",
        icon: <Globe size={16} />,
      },
      {
        label: "Wi-Fi",
        value: "2.4 / 5 GHz (Onboarding only)",
        icon: <Wifi size={16} />,
      },
      {
        label: "Power",
        value: "48V PoE 803.2at",
        icon: <Zap size={16} />,
      },
      {
        label: "Antenna",
        value: "Fiber Glass Outdoor Antenna (N-Connector)",
        icon: <RadioTower size={16} />,
      },
      {
        label: "Cellular",
        value: "4G Upgradable",
        icon: <Globe size={16} />,
      },
    ],

    // Enclosure
    enclosure: {
      material: "Acrylonitrile Styrene Acrylate (ASA)",
      features: [
        "UV rays resistant",
        "Chemicals resistant",
        "Industrial-grade enclosure",
      ],
    },

    // Deployment Stats
    stats: [
      {
        value: "2901+",
        label: "Hotspots Deployed",
        icon: <RadioTower size={20} />,
      },
      {
        value: "951+",
        label: "4G Backhaul Hotspots",
        icon: <Globe size={20} />,
      },
      {
        value: "1592+",
        label: "Customers",
        icon: <Cloud size={20} />,
      },
    ],

    // Images
    additionalImages: [cphhIp6, CpiOH],

    // Documents & Media
    documents: [
      { title: "Full Specification Sheet" },
      { title: "Getting Started Guide" },
    ],
    media: [{ title: "Quick Unboxing Video" }],

    // Purchase
    purchase: {
      cta: "Buy Online",
      shop: true,
    },

    // Contact
    emails: {
      general: "meetus@clodpi.io",
      sales: "sales@clodpi.io",
    },
  },
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return productDetails[id] || null;
};

// Get all product IDs for routing
export const getAllProductIds = () => {
  return Object.keys(productDetails);
};
