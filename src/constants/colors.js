// constants/colors.js
export const colors = {
  // New color palette with blue theme
  primary: "#2563EB", // Rich Blue
  secondary: "#60A5FA", // Sky Blue
  accent: "#DBEAFE", // Light Blue
  light: "#EEEEEE", // Off-white

  // Additional colors for glass effects
  dark: "#1a1a2e", // Dark for text
  success: "#10b981", // Emerald for success states

  // Glass morphism colors with transparency
  glass: {
    white: "rgba(238, 238, 238, 0.85)",
    primary: "rgba(37, 99, 235, 0.15)",
    secondary: "rgba(96, 165, 250, 0.15)",
    dark: "rgba(26, 26, 46, 0.85)",
    light: "rgba(219, 234, 254, 0.1)",
    blur: "blur(20px)",
  },
};

export const gradients = {
  primary: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
  secondary: "linear-gradient(135deg, #60A5FA 0%, #DBEAFE 100%)",
  glass:
    "linear-gradient(135deg, rgba(238, 238, 238, 0.9) 0%, rgba(219, 234, 254, 0.8) 100%)",
  hero: "linear-gradient(180deg, rgba(238, 238, 238, 0.95) 0%, rgba(219, 234, 254, 0.2) 100%)",
};
