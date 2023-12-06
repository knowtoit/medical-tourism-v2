import React from "react";
import "./style.css";
import KeynoteSpeaker from "./KeynoteSpeaker/KeynoteSpeaker";
import TheSimplestProcess from "./TheSimplestProcess/index";
import Carousel from "./carousel/carousel";
import Pricing from "./Pricing/index";
import FAQ from './FAQ/index'
const Fl = () => {
  return (
    <div>
      <FAQ />
      <TheSimplestProcess />
      <Carousel />
      <Pricing />
      <KeynoteSpeaker />
    </div>
  );
};

export default Fl;
