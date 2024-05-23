import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.jpg";

const About =({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About Company</h3>
        <h2>Corporate Overview</h2>
        <p>AroPharma pvt ltd. is a young and dynamic drug delivery systems (DDS) company in India that provides a range of effective solutions to optimize the delivery of pharmaceutical products.</p>
        <p>We are thankful to all our customers, agents, employees and well-wishers for their continuous support to convert our ideas into technology and technologies to success and profit.</p>
        <p>We welcome customers across the world to start a promising business relationship with us!</p>

        <h2>Vision & Mission </h2>
        <h3>Vision</h3>
        <p>AroPharma is committed to the pursuit of excellence through world-class products, innovative processes and  to provide the highest level of satisfaction to its customers.</p>
        <h3>Mission</h3>
        <p>Provide quality medicines at affordable price</p>
        <p>Improving the awareness about the diseases</p>
        <p>Helping physicians to improve the quality of life of patients</p>
        
         
      </div>
    </div>
  );
}

export default About;
