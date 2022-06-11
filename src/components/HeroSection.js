import React from "react";
import Typed from "react-typed"
export default function HeroSection (){

  return(
    <div id="hero" className="hero-section">
    
      <h2 className="hero-heading">{
        <Typed
      strings={[
            "We build awesome products",
            "We provide great software solutions",
            "We promote black entreprenorship",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      }</h2>
    </div>
  )
}