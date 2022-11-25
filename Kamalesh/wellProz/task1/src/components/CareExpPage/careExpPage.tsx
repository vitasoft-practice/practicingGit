import React from "react";
import "./careExpPage.css"
import { useState } from "react";
//import carePictuer from "./carePicture.png"
//import careFirstScroll from "./careFirstScroll.png"
import bulletTick from "./bulletTick.png"

const CareExpPAge = () => {
    const [scrolledFirst,setscrolledFirst]= useState(false);
    const [scrolledSec,setscrolledSec]= useState(false);
    const [scrolledThird,setscrolledThird]= useState(false);
    const [scrolled,setscrolled]= useState(false);
    const [scrolledType,setscrolledType]= useState('');
    var firstImage = require('./careFirstScroll.png')
    var secondImage =  require('./careSecond.png')
    var thirdImage =  require('./carePicture.png')
    const [imageSrc,setimageSrc]= useState(firstImage);
    function scrollPicture(){
        console.log("//",window.scrollY)
        if(window.scrollY >= 1300 && window.scrollY <=1400){
            setscrolledFirst(true)
            setscrolledSec(false)
            setscrolledThird(false)
            setscrolled(true)
            setscrolledType('firstImage')
            setimageSrc(firstImage)
        }
        else if(window.scrollY >= 1400 && window.scrollY <=1500){
            setscrolledFirst(false)
            setscrolledSec(true)
            setscrolledThird(false)
            setscrolled(true)
            setscrolledType('secondImage')
            setimageSrc(secondImage)
        }
        else if(window.scrollY >= 1500){
            setscrolledFirst(false)
            setscrolledSec(false)
            setscrolledThird(true)
            setscrolled(true)
            setscrolledType('thirdImage')
            setimageSrc(thirdImage)
        }
        else{
            setscrolled(false)
        }
    }
    window.addEventListener('scroll',scrollPicture)
    return (
        <div className="CareExpPAge">
            <div className="careExpwrapper">
                <div className="LeftExp">
                    <div className={scrolled ? "imageclass fadeactive " + scrolledType : "fadeinactive"}>
                        <img src= { imageSrc }  className="careImageClass" alt="" />
                    </div>
                </div>
                <div className="RightExp">
                    <div className="mainHeader">Create a care experience your patients love </div>
                    <div className="expContent">For the first time ever, you can now offer clinical lab testing, practitioner grade supplements, your own services and more with shipping, fulfillment, and logistics all done-for-you in a single platform. </div>
                    <div className={scrolledFirst ? "firstOption active" : "inactive"}>
                        <div className="secondHeader"><span><img src= { bulletTick } className="bulletin" alt="" /></span> Precision Wellness Testing </div>
                        <div className="expContent">Help your patients get to the root cause of their health issue by offering a vast menu of specialty wellness lab testing. Easily integrate custom Vibrant America panels into your store for a truly personalized experience.  </div>
                    </div>
                    <div className={scrolledSec ? "secondOption active" : "inactive"}>
                        <div className="secondHeader"><span><img src= { bulletTick } className="bulletin" alt="" /></span> Smart Dispensary </div>
                        <div className="expContent">We have already done the heavy lifting to get you access to the best brands and dispensaries. Choose from thousands of Professional-grade supplements you love. Dispense virtual or In-Office! </div>
                    </div>
                    <div className={scrolledThird ? "thirdOption active" : "inactive"}>
                        <div className="secondHeader"><span><img src= { bulletTick } className="bulletin" alt="" /></span> Create Programs with Services </div>
                        <div className="expContent">We have already done the heavy lifting to get you access to the best brands and dispensaries. Choose from thousands of Professional-grade supplements you love. Dispense virtual or In-Office! </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  CareExpPAge