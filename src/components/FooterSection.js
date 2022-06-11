import React from "react";

export default function FooterSection (){

  return(
    <div id="footer" className="wrapper">

    <form className="form">
      <div className="pageTitle title">Contact Us </div>

      <div className="secondaryTitle title">Please fill this form to contact us.</div>

      <input type="text" className="name formEntry" placeholder="Name" />

      <input type="text" className="email formEntry" placeholder="Email"/>

      <textarea className="message formEntry" placeholder="Message"></textarea>

      <input type="checkbox" className="termsConditions" value="Term"/>

      <label style={{color: "grey"}} for="terms"> I Accept the <span style={{color: "#fff"}}>Terms of Use</span> & <span style={{color: "#fff"}}>Privacy Policy</span>.</label><br/>
      <button className="submit formEntry" onclick="thanks()">Submit</button>
    </form>

   
  </div>
  )
}