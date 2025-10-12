import React from "react";
import bagroundImage from "../assets/background.jpg";

function Hero() {
  return (
    <section className="pt-3">
      <img
        src={bagroundImage} alt="Background" className="min-w-[375px]"
      />
    </section>
  );
}

export default Hero;
