import React from "react";
import "./Shopnow.css"
import logo1 from "./images/4.png"

const Shopnow = () =>{
    return(
        <div className="Shopnow">
                <div className="advertisment">
                    <img src={logo1} alt="hi"></img>
                    <p>100% healthy and affordable</p>
                    <h1>Organic Vegetables</h1>
                    <p>Small charges Big Difference</p>
                    <button className="shopbtn">Shop Now</button>
                </div>
        </div>
    )
}

export default Shopnow