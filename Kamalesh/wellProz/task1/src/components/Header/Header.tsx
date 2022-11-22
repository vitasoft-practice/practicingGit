import React from "react";
import logo from "./HeaderLogo.png"
import "./header.css"
const Header = () => {
    return (
        <div className="Header">
            <div className="leftH">
            <img src= { logo } className="Logo" alt="" />
            <div className="companyName">WellProz</div>
            </div>
            <div className="rightH">
                <div className="signIn">Sign In</div>
                <div className="signUp">Sign Up</div>
            </div>
        </div>
    )
}
export default  Header