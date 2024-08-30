import React from "react";
import Marquee from "react-fast-marquee";

// Importing images from the src folder
import flaskImg from "../assets/img/flask.svg";
import materialUiImg from "../assets/img/material-ui-img.svg";
import matlabImg from "../assets/img/matlab.svg";
import nextImg from "../assets/img/nextimg.svg";
import reactImg from "../assets/img/reactimg.svg";
import typescriptImg from "../assets/img/typescriptimg.svg";
import zeplineImg from "../assets/img/zepline.svg";
import blockchainImg from "../assets/img/blockchain.svg";
import aiDevelopmentImg from "../assets/img/ai-development.svg";

// Updated items array with imported images
const items = [
  {
    name: "AI",
    color: "#9C42F5",
    url: flaskImg,
  },
  {
    name: "Mobile",
    color: "#0FA",
    url: materialUiImg,
  },
  {
    name: "Software",
    color: "#4579F5",
    url: matlabImg,
  },
  {
    name: "Automation",
    color: "#F43F5E",
    url: nextImg,
  },
  {
    name: "AI",
    color: "#9C42F5",
    url: reactImg,
  },
  {
    name: "Mobile",
    color: "#0FA",
    url: typescriptImg,
  },
  {
    name: "Software",
    color: "#4579F5",
    url: zeplineImg,
  },
  // {
  //   name: "Automation",
  //   color: "#F43F5E",
  //   url: blockchainImg,
  // },
  // {
  //   name: "Automation",
  //   color: "#F43F5E",
  //   url: aiDevelopmentImg,
  // },
];

const Marque = () => {
  return (
    <Marquee>
      {items.map((item, index) => (
        <div className="Marquee-Card" key={index}>
          {/* Uncomment this section if you want to display the name with a gradient background */}
          {/* <h3
            style={{
              background: `linear-gradient(180deg, ${item.color} 0%, #e8f0ff 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item.name}
          </h3> */}
          <img src={item.url} alt={item.name} />
          <div></div>
        </div>
      ))}
    </Marquee>
  );
};

export default Marque;
