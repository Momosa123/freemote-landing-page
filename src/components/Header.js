import React from "react";

export default function Header(){
  return(
    <div className="container header__container">
    <nav className="navigation">
      <h1>LOGO</h1>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Our services</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}