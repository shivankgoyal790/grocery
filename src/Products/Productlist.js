import React  from "react";
import Productcard from "./Productcard";

const Productlist = props =>{
    return(
        <>
        {props.items.map(curr =>(
            <Productcard 
            name = {curr.name}
            image = {curr.image}
            weight1 = {curr.weight1}
            weight2 = {curr.weight2}
            weight3 = {curr.weight3}
            sale = {curr.sale}
            price = {curr.price}
            alignment = "center"
            />

        ))}
        </>
    )
}

export default Productlist