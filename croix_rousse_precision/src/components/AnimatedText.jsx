import React from "react";

const AnimatedText = ({ text, delayStep = 0.05 }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * delayStep}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
