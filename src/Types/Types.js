import React from "react";
import "./Types.css"
import logo1 from "../images/client-1_200x200.png"
import logo2 from "../images/client-2_200x200.png"
import logo3 from "../images/client-3_200x200.png"
import logo4 from "../images/client-4_200x200.png"
import logo5 from "../images/client-5_200x200.png"
const Types = () =>{
    return(
        <div className="types-container">
            <div className="types">
                <img src={logo1} alt="hi"></img>
                <img src={logo2} alt="hi"></img>
                <img src={logo3} alt="hi"></img>
                <img src={logo4} alt="hi"></img>
                <img src={logo5} alt="hi"></img>
            </div>
            <div className="slide">
                <span></span>
                <span className="actives"></span>
                <span></span>
            </div>
        </div>
    )
}

export default Types