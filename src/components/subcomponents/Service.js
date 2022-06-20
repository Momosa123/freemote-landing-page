import React from "react";

export default function Terms(props){
  return(
    <div className="service-block" >
          <img  src={props.url} alt="" />
          <h3 className="services">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
  )
}