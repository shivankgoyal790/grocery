import React from "react";
import "./Subscribe.css"
import logo from "./images/section-bgimage-layer1.png"
const Subscribe = () =>{
    return(
        <div className="subscribe-container">
            <img className="basket" src={logo} alt="basket"/>
            <div className="subscribe">
                <h1>Subscribe To our Newsletter</h1>
                <div className="input-subs">
                    <input type="text" placeholder="Your email address" />
                    <button className="readmore">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe