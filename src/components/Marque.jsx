import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  {
    name: "AI",
    color: "#9C42F5",
  },
  {
    name: "Blockchain",
    color: "#0FA",
  },
  {
    name: "Software",
    color: "#4579F5",
  },
  {
    name: "Consulting",
    color: "#F43F5E",
  },
  {
    name: "AI",
    color: "#9C42F5",
  },
  {
    name: "Blockchain",
    color: "#0FA",
  },
  {
    name: "Software",
    color: "#4579F5",
  },
  {
    name: "Consulting",
    color: "#F43F5E",
  },
];
const Marque = () => {
  return (
    <Marquee>
      {items.map((item, index) => (
        <div className="Marquee-Card" key={index}>
          <h3
            style={{
              background: `linear-gradient(180deg, ${item.color} 0%, #e8f0ff 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item.name}
          </h3>
          <div></div>
        </div>
      ))}
    </Marquee>
  );
};

export default Marque;
