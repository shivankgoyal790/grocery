import React from "react";
import "./fruitandveggies.css"

const Fruitandveggies = () =>{
    return(
        <div className="container">
            <div className="veggies">
                <div className="info1">
                    <div className="info-details">
                        <h1>Fruits</h1>
                        <p>100% Organic Products</p>
                        <button className="button1">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="fruits">
                <div className="info2">
                <div className="info-details">
                        <h1>Veggies</h1>
                        <p>100% Fresh Products</p>
                        <button className="button2">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Fruitandveggies