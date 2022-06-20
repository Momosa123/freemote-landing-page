import React from "react";
import Service from "./subcomponents/Service";
import imageJson from "../image";

export default function ServicesSection() {
  const imageElements = imageJson.map((image) => (
    <Service 
        key={image.id}
        url={image.url} 
        title={image.title}
        desc={image.desc}
        />
  ));
  return (
    <div id="services" className="services-section">
      <h2 className="services-heading">Our services</h2>
      <div className="service-container">{imageElements}</div>
    </div>
  );
}
