import React from "react";

export default function ServicesSection (){

  return(
    <div id="services" className="services-section">
      <h2 className="services-heading">Our services</h2>
      <div className="services-container">
        
        <div>
          <img src="https://assets.codepen.io/6060109/agency-service-1.png" alt="" />
          <h3 className="services">web design</h3>
        </div>
        <div>
          <img src="https://assets.codepen.io/6060109/agency-service-2.png" alt="" />
          <h3 className="services">Ecommerce</h3>
        </div>
        <div>
          <img src="https://assets.codepen.io/6060109/agency-service-3.png" alt="" />
          <h3 className="services">Automation</h3>
        </div>
      </div>
    </div>
  )
}