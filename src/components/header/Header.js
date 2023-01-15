import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://cdn.discordapp.com/attachments/1063718816363851868/1064173558261092484/Untitled-1.png"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>POPULAR</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>TOP RATED</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>UPCOMING</span></Link>
            </div>
            <div className="login-button">
			<a href="#" className="social-button" id="facebook-connect"> <span>LOGIN</span></a>
            </div>
        </div>
    )
}

export default Header