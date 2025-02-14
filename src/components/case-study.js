"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Prince Gaming",
    link: "https://youtube.com/@princegaming575753?si=NkxEJZFni4cfUIQA",
    thumbnail:
      "/Prince_Gaming.png",
  },
  {
    title: "hk2fy",
    link: "https://www.youtube.com/@brhk2fy",
    thumbnail:
      "/hk2fy.png",
  },
  {
    title: "AM_Flash_Gamer",
    link: "https://www.youtube.com/@amflashgamer",
    thumbnail:
      "/AM Flash Gamer.png",
  },

  {
    title: "Razzee Gaming",
    link: "https://www.youtube.com/@razzeegaming",
    thumbnail:
      "/Razzee_Gaming.png",
  },
  {
    title: "Preet X",
    link: "https://www.youtube.com/@preeet_x",
    thumbnail:
      "/Preet_X.png",
  },

  
];
