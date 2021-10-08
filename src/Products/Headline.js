import React from "react";
import "./headline.css"
import Item from "./Item";
import logo1 from "../images/icon-6_80x80.png"
import logo2 from "../images/icon-5_80x80.png"
import logo3 from "../images/icon-4_80x80.png"
import logo4 from "../images/icon-3_80x80.png"
import logo5 from "../images/icon-2_80x80.png"
import logo6 from "../images/icon-1_80x80.png"


const headline = () =>{
    return(
        <div className="product-headline">
        <h1>Our Products</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className="product-items-container">
        <Item color="rgba(150, 214, 137, 0.5)" image={logo1} itemname="Milk"/>
        <Item color="#f9b1af" image={logo2} itemname="Fruits"/>
        <Item color="#ffdb4f" image={logo3} itemname="Flour"/>
        <Item color="#fe6d30" image={logo4} itemname="Meat"/>
        <Item color="#f9b1af" image={logo5} itemname="Veggies"/>
        <Item color="#ffdb4f" image={logo6} itemname="Eggs"/>
        </div>
        </div>
        
    )
}

export default headline