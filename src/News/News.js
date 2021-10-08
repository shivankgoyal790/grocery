import React from "react"
import "./News.css"
import logo1 from "../images/news1.jpg"
import logo2 from "../images/news2.jpg"
import logo3 from "../images/news3.jpg"
import Newscard from "./Newscard"

const News = () =>{
    return(
        <div className="latestnews">
            <h1>Our Latest News</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="news-container">
                <div>
                    <Newscard image={logo1}  head="Best in Quality Fresh Meat & Seafood" date="March 25, 2020" flexdir="column" />
                </div>
                <div>
                    <Newscard image={logo1} date="March 25, 2020" head="Best Way to eat Dry friuts and Nuts"/>
                    <Newscard image={logo2} date="March 22, 2020" head="Fruits & Vegetables Ingredients and Benifits"/>
                    <Newscard image={logo3} date="March 21, 2020" head="Go early for shopping The freshest food"/>
                </div>
        </div>
        </div>
    )
}

export default News