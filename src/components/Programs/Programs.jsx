import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.jpg";
import program_2 from "../../assets/program-2.jpg";
import program_3 from "../../assets/program-3.jpg";

import program_icon1 from "../../assets/program-icon1.svg";
import program_icon2 from "../../assets/program-icon2.svg";
import program_icon3 from "../../assets/program-icon3.svg";

function Programs() {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon1} alt="" />
             <p>Medicine Name</p>
        </div>
      </div>
      
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon2} alt="" />
             <p>Medicine name</p>
        </div>
      </div>
     
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon3} alt="" />
             <p>Medicine</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
