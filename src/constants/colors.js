/**
 * Color Palette Constants
 * Centralized color definitions for the entire application
 */

export const colors = {
  primary: "#0f172a",        // Deep Space Blue
  secondary: "#3b82f6",      // Electric Blue
  accent: "#06b6d4",         // Cyan
  light: "#f1f5f9",          // Light Gray
  dark: "#1e293b",           // Dark Slate
  success: "#10b981",        // Green
  warning: "#f59e0b",        // Amber

  // Additional utility colors
  white: "#ffffff",
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // Glass effect variants
  glass: {
    white: "rgba(255, 255, 255, 0.92)",
    primary: "rgba(15, 23, 42, 0.05)",
  },

  // Gradient backgrounds
  gradients: {
    primaryToSecondary: `linear-gradient(135deg, #0f172a, #3b82f6)`,
    secondaryToAccent: `linear-gradient(135deg, #3b82f6, #06b6d4)`,
    lightToWhite: `linear-gradient(135deg, #f1f5f9, #ffffff)`,
  },
};

export default colors;
