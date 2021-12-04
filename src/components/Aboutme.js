import React from "react";

function Aboutme() {
    return (
        <div className="w3-half w3-blue-grey w3-container" style={{height:"700px"}}>
      <div className="w3-padding-64 w3-center">
        <h1>About Me</h1>
        <img src="./20200921_134652.jpg" className="w3-margin w3-circle" alt="Tyler Everett" style={{width: "25%"}}/>
        <div className="w3-left-align w3-padding-large">
          <p>I am an aspiring web designer and programmer! I have always been interested in computers, and grew up
            playing video games. My first real job out of highschool was to intern at a PC repair shop. </p>

          <p> In my few years on the planet I have done:</p>
          <ul>
            <li>PC Repair.</li>
            <li> Website Design</li>
            <li>Ran manufactiong at a major Optical Laboratory.</li>
            <li>Team Lead and management, reporting directly to the head of the department.</li>
          </ul>
        </div>
      </div>
    </div>
    )
}
export default Aboutme
