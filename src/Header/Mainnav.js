import React from "react";
import "./Mainnav.css"
import Searchnav from "./Searchnav";
import Navbar from "./Navbar"
const Mainnav = () =>{
    return(
        <div className="main-header">
        <Navbar/>
        <Searchnav/>
        </div>
    )
}

export default Mainnav
