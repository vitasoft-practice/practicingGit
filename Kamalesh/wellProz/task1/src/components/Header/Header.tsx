import React from "react";
import logo from "./HeaderLogo.png"
import "./header.css"
import womenImage from "./womenImage.png"
import graph1 from "./graph1.png"
import graph2 from "./graph2.png"
import catalog from "./catalog.png"
import Ellipse from "./Ellipse.png"
import doctorPrescription from "./doctorPrescription.png"
const Header = () => {
    return (
        <div>
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
            <div className="firstPageContent">
                <div className="leftsidePage">
                    <div className="leftPageHeader">Your patients are on the web, you should be too.</div>
                    <div className="leftPageContent">Modernize your practice with cutting edge e-commerce technology, exclusively through Z Suite.</div>
                    <div className="leftPageButton">Try it Free</div>
                </div>
                <div className="rightsidePage">
                    <div className="grid">
                    <img src= { Ellipse } className="Ellipse" alt="" />
                    <img src= { womenImage } className="womenImage" alt="" />
                    <img src= { graph1 } className="graph1" alt="" />
                    <img src= { graph2 } className="graph2" alt="" />
                    <img src= { doctorPrescription } className="doctorPrescription" alt="" />
                    <img src= { catalog } className="catalog" alt="" />
                    </div>
                </div>
                    
            </div>
        </div>
    )
}
export default  Header