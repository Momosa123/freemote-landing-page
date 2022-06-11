import React from "react";

export default function Terms(props){
  return(
    <div className="services-section">
          <img src={props.url} alt="" />
          <h3 className="services">{props.title}</h3>
        </div>
  )
}