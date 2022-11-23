import React from "react";
import './page2.css'
import newRevenue from './newRevenueStream.png'
import patientExp from './patientExp.png'
import brandedStore from './brandedSTore.png'
const Page2 = () => {
    return (
        <div className="page2">
            <div className="page2wrapper">
            <div className="page2Header">Designed for <span style={{color:'#3498DB'}}>patients</span>. Built for <span style={{color:'#84BC3B'}}>providers</span>.
            </div>
            <div className="page2Content">
            <div className="squareBorderLeft"></div>
                <div className="container">
                    <div className="containerLogo"><img src= { newRevenue } className="page2Logo" alt="" /></div>
                    <div className="containerHeader">Unlock New Revenue Streams</div>
                    <div className="containerContent">Converting leads to new patients is easy with a mobile-optimized store that simplifies the ordering process.</div>
                </div>
                <div className="container">
                    <div className="containerLogo"><img src= { patientExp } className="page2Logo" alt="" /></div>
                    <div className="containerHeader">Delightful Patient Experience</div>
                    <div className="containerContent">Offer your patients a simple, seamless digital experience right at their fingertips and boost your online reputation and improve patient retention.</div>
                </div>
                <div className="container">
                    <div className="containerLogo"><img src= { brandedStore } className="page2Logo" alt="" /></div>
                    <div className="containerHeader">Your Branded Store -No coding required</div>
                    <div className="containerContent">In just a few clicks, you can create and publish a beautiful online store you have always dreamed about.</div>
                </div>
                <div className="squareBorderRight"></div>
            </div>
            </div>
        </div>
    )
}
export default  Page2