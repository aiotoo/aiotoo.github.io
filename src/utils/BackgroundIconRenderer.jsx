import React from "react";
import {
  aboutBackgroundIcons,
  heroBackgroundIcons,
  backgroundIcons,
} from "./backgroundIcons";

const BackgroundIconRenderer = ({
  variant = "all",
  opacity = "opacity-5",
  className = "",
}) => {
  const icons =
    variant === "hero"
      ? heroBackgroundIcons
      : variant === "about"
      ? aboutBackgroundIcons
      : backgroundIcons;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.position} ${opacity} animate-float`}
          style={{ animationDelay: icon.delay }}
        >
          <icon.Icon className={`${icon.size}`} style={{ color: icon.color }} />
        </div>
      ))}
    </div>
  );
};

export default BackgroundIconRenderer;
