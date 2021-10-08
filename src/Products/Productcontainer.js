import React from "react";
import Productlist from "./Productlist";
import "./Productcontainer.css"
import logo1 from "../images/Shop-1_460x.png"
import logo2 from "../images/capsicum.png"
import logo3 from "../images/Shop-3_9cf73c86-45d1-4537-b889-21b2d830842f_460x.png"
import logo4 from "../images/Shop-4_460x.png"
import logo5 from "../images/Shop-5_460x.png"
import logo6 from "../images/Shop-6_460x.png"
import logo7 from "../images/Shop-7_fb01e129-a669-4c8c-b3c4-0eb4bf8e8b56_460x.png"
import logo8 from "../images/rice.png"
import logo9 from "../images/Shop-9_61053b85-0ef8-4181-b6e9-d46356834cdf_460x.png"
import logo10 from "../images/Shop-10_460x.png"
import logo11 from "../images/Shop-11_9a09316b-1a13-4bf6-bdf8-9192ef0311fb_460x.png"
import logo12 from "../images/fish.png"

const Products = [
    {
        name:'Watermelon',
        price:'100.00',
        weight1:'3kg',
        weight2:'2kg',
        weight3:'1kg',
        sale:'',
        image: logo1

    },
    {
        name:'Capsicum',
        price:'400.00',
        weight1:'5kg',
        weight2:'3kg',
        weight3:'1kg',
        sale:"yes",
        image: logo2
    },
    { 
        name:'Coriander',
        price:'400.00',
        weight1:'4kg',
        weight2:'5kg',
        weight3:'3kg',
        sale:"",
        image:logo3
    },
    {
        name:'Eggs',
        price:'200.00',
        weight1:'3kg',
        weight2:'5kg',
        weight3:'2kg',
        sale:"",
        image:logo4
    },
    {
        name:'Chicken Breast',
        price:'500.00',
        weight1:'2kg',
        weight2:'3kg',
        weight3:'4kg',
        sale:"",
        image:logo5
    },
    {
        name:'Badaam',
        price:'300.00',
        weight1:'4kg',
        weight2:'5kg',
        weight3:'1kg',
        sale:"yes",
        image:logo6
    },
    {
        name:'Nut cookies',
        price:'319.00',
        weight1:'2kg',
        weight2:'3kg',
        weight3:'1kg',
        sale:"",
        image:logo7
    },
    {
        name:'TM Rice',
        price:'523.00',
        weight1:'3kg',
        weight2:'2kg',
        weight3:'1kg',
        sale:"",
        image:logo8
    },
    {
        name:'Flower Mushroom',
        price:'129.00',
        weight1:'2kg',
        weight2:'3kg',
        weight3:'1kg',
        sale:"yes",
        image:logo9
    },
    {
        name:'Potato',
        price:'329.00',
        weight1:'1kg',
        weight2:'2kg',
        weight3:'3kg',
        sale:"",
        image:logo10
    },
    {
        name:'Fresh Meat',
        price:'549.00',
        weight1:'5kg',
        weight2:'4kg',
        weight3:'3kg',
        sale:"",
        image:logo11
    },
    {
        name:'Fish Curry',
        price:'459.00',
        weight1:'2kg',
        weight2:'3kg',
        weight3:'5kg',
        sale:"",
        image:logo12
    }
]

const Productcontainer = () =>{
    return(
        <div className="all-items-container">
            <Productlist items= {Products} />
        </div>
    )
}

export default Productcontainer