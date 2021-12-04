import React from "react";

function Navbar() {
    return (
        <div className="w3-half w3-black w3-container w3-center" style={{height:"700px"}}>
        <div className="w3-padding-64">
          <h1>Tyler Everett </h1>
        </div>
        <div className="w3-padding-64">
          <a href="#" className="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16">Home</a>
          <a href="#work" className="w3-button w3-black w3-block w3-hover-teal w3-padding-16">My Work</a>
          <a href="#work" className="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16">Resume</a>
          <a href="#contact" className="w3-button w3-black w3-block w3-hover-brown w3-padding-16">Contact</a>
        </div>
      </div>
    )
}
export default Navbar