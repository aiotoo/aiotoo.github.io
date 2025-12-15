import {
  RadioTower,
  Cpu,
  MemoryStick,
  Router,
  Wifi,
  Globe,
  Cloud,
  Shield,
  Zap,
  MapPin,
  Activity,
  Satellite,
  Server,
  Bluetooth,
  Brain,
  CircuitBoard,
  Thermometer,
  Gauge,
  Bell,
  Eye,
  Sparkles,
  Layers,
  Database,
  BarChart,
} from "lucide-react";
import { colors } from "../constants/colors";

export const backgroundIcons = [
  // First 11 icons - consistent naming
  {
    Icon: RadioTower,
    size: "w-16 h-16",
    position: "top-1/4 left-1/6",
    color: colors.primary,
    delay: "0s",
  },
  {
    Icon: Wifi,
    size: "w-12 h-12",
    position: "top-1/3 right-1/5",
    color: colors.secondary,
    delay: "1s",
  },
  {
    Icon: Cpu,
    size: "w-14 h-14",
    position: "bottom-1/4 left-1/4",
    color: "#8B5CF6",
    delay: "2s",
  },
  {
    Icon: Globe,
    size: "w-16 h-16",
    position: "top-1/2 right-1/3",
    color: "#10B981",
    delay: "3s",
  },
  {
    Icon: MemoryStick,
    size: "w-12 h-12",
    position: "bottom-1/3 left-1/5",
    color: "#EF4444",
    delay: "0.5s",
  },
  {
    Icon: Router,
    size: "w-14 h-14",
    position: "top-1/6 right-1/4",
    color: "#F59E0B",
    delay: "1.5s",
  },
  {
    Icon: Cloud,
    size: "w-16 h-16",
    position: "bottom-1/6 right-1/6",
    color: "#06B6D4",
    delay: "2.5s",
  },
  {
    Icon: Shield,
    size: "w-12 h-12",
    position: "top-2/3 left-1/3",
    color: "#8B5CF6",
    delay: "3.5s",
  },
  {
    Icon: Zap,
    size: "w-14 h-14",
    position: "bottom-2/5 right-1/5",
    color: "#F59E0B",
    delay: "4s",
  },
  {
    Icon: MapPin,
    size: "w-12 h-12",
    position: "top-1/5 left-2/5",
    color: "#EF4444",
    delay: "0.8s",
  },
  {
    Icon: Activity,
    size: "w-14 h-14",
    position: "bottom-1/5 left-1/2",
    color: "#10B981",
    delay: "1.8s",
  },
  // Additional icons
  {
    Icon: Satellite,
    size: "w-10 h-10",
    position: "top-20 right-1/6",
    color: colors.secondary,
    delay: "5s",
  },
  {
    Icon: Server,
    size: "w-12 h-12",
    position: "bottom-40 left-10",
    color: "#8B5CF6",
    delay: "6s",
  },
  {
    Icon: Bluetooth,
    size: "w-10 h-10",
    position: "top-1/3 left-1/3",
    color: "#10B981",
    delay: "7s",
  },
  {
    Icon: Brain,
    size: "w-12 h-12",
    position: "bottom-1/3 right-1/4",
    color: "#F59E0B",
    delay: "8s",
  },
  {
    Icon: CircuitBoard,
    size: "w-12 h-12",
    position: "top-2/3 left-1/4",
    color: "#EF4444",
    delay: "9s",
  },
  {
    Icon: Thermometer,
    size: "w-10 h-10",
    position: "bottom-1/6 right-20",
    color: "#06B6D4",
    delay: "10s",
  },
  {
    Icon: Gauge,
    size: "w-12 h-12",
    position: "top-1/6 left-1/2",
    color: "#8B5CF6",
    delay: "11s",
  },
  {
    Icon: Bell,
    size: "w-10 h-10",
    position: "bottom-2/5 left-1/3",
    color: "#10B981",
    delay: "12s",
  },
  {
    Icon: Eye,
    size: "w-12 h-12",
    position: "top-1/2 right-20",
    color: colors.primary,
    delay: "13s",
  },
  {
    Icon: Sparkles,
    size: "w-10 h-10",
    position: "top-10 left-1/4",
    color: colors.secondary,
    delay: "14s",
  },
  {
    Icon: Layers,
    size: "w-14 h-14",
    position: "bottom-20 right-1/4",
    color: "#8B5CF6",
    delay: "15s",
  },
  {
    Icon: Database,
    size: "w-12 h-12",
    position: "top-40 right-40",
    color: "#10B981",
    delay: "16s",
  },
  {
    Icon: BarChart,
    size: "w-14 h-14",
    position: "bottom-10 left-40",
    color: "#F59E0B",
    delay: "17s",
  },
];

// Optional: Create different sets for different sections
export const heroBackgroundIcons = backgroundIcons.slice(0, 12);
export const aboutBackgroundIcons = backgroundIcons.slice(12, 24);
export const allBackgroundIcons = backgroundIcons;

// BackgroundIcon component for reusability
export const BackgroundIcons = ({
  icons = allBackgroundIcons,
  opacity = "opacity-5",
}) => {
  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.position} ${opacity} animate-float`}
          style={{ animationDelay: icon.delay }}
        >
          <icon.Icon className={`${icon.size}`} style={{ color: icon.color }} />
        </div>
      ))}
    </>
  );
};
