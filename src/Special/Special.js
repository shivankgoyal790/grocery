import React from "react";
import Productcard from "../Products/Productcard";
import "./Special.css"
import logo1 from "../images/Shop-1_460x.png" 
import logo2 from "../images/Shop-17.png"
import logo3 from "../images/Shop-12.png"
import logo4 from "../images/capsicum.png"
import logo5 from "../images/fish.png"
import logo6 from "../images/Shop-9_61053b85-0ef8-4181-b6e9-d46356834cdf_460x.png"
import logo7 from "../images/Shop-14_ff25c471-0a81-4502-8a8f-aaa077f13baf.png"
const Special = () =>{
return(
    <div className="special-container">
    <h1>Our Special Products</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <div className="special-products">
        <div className="product-flex">
            <Productcard image={logo2} length="300px" flexdir="row"
             alignment="left" weight1= "2kg" weight2= "3kg" weight3= "5kg"
             border="none" price="123.00" name="Mandrain Orange"/>
            <hr></hr>
            <Productcard image={logo1} length="300px" flexdir="row" 
            alignment="left" weight1= "2kg" weight2= "3kg" weight3= "5kg"
                border="none" price="100.00" name="Watermelon"/>
            <hr></hr>
            <Productcard image={logo3} length="300px" flexdir="row" 
            alignment="left" weight1= "2kg" weight2= "3kg" weight3= "5kg" border= "none"
                price = "429.00" name="Chicken Boneless"
            />
        </div>
        <div className="product-flex">
        <Productcard image={logo4} length="300px" alignment="center" weight1= "2kg" weight2= "3kg" weight3= "5kg" border= "none"
            price="400.00" name="Capsicum" />
        </div>
        <div className="product-flex">
        <Productcard image={logo5} length="300px" flexdir="row" alignment="left"
            weight1= "2kg" weight2= "3kg" weight3= "5kg" border= "none" price="459.00"
            name="Fish Curry" 
        />
            <hr></hr>
            <Productcard image={logo6} length="300px" flexdir="row" alignment="left"
                weight1= "2kg" weight2= "3kg" weight3= "5kg" border= "none" price="129.00" name="Mushrooms" sale
            />
            <hr></hr>
        <Productcard image={logo7} length="300px" flexdir="row" alignment="left"
            weight1= "2kg" weight2= "3kg" weight3= "5kg" border= "none" price="319.00" name="Butter Cookies"
        />
        </div>
    </div>
    </div>
)}

export default Special