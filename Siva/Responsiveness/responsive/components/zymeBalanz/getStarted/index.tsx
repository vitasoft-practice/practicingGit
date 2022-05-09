import React from "react";
import Image from "next/image"
import classes from './getStarted.module.scss'
import photo from '../../../public/images/Group 30.png'
import icon from '../../../public/images/checked.png'


const GetStarted: React.FC = ()=>{
    return(
        <div>
            <div className={classes.getStarted}>
        <div className={classes.getStarted_text}>
            
            <p className={classes.getStarted_text_first}>Easy to get start</p>
            <div className={classes.getStarted_text_second}><h1>$0</h1> <p className={classes.getStarted_text_month}>/month</p> </div>
            <div className={classes.getStarted_text_line}></div>
            <div className={classes.getStarted_text_third}>
            <ul className={classes.getStarted_text_ul}>
            <li>   <div className={classes.getStarted_text_ul_icon}>
            <Image
                alt="Nature"
                src={icon}
                layout="intrinsic"
                objectFit="none" 
                width="17px"
                height="13px"
                
                />
            </div>
            
                Free to set up an account and get started, no hidden fees</li>
                
                <li>
                        
                <div className={classes.getStarted_text_ul_icon}>
            <Image
                alt="Nature"
                src={icon}
                layout="intrinsic"
                objectFit="none" 
                width="17px"
                height="13px"
                
                />
            </div>
                All you need is a computer or Laptop</li>    
                <li>     
                <div className={classes.getStarted_text_ul_icon}>
            <Image
                alt="Nature"
                src={icon}
                layout="intrinsic"
                objectFit="none" 
                width="17px"
                height="13px"
                
                />
            </div>
                We provide expertise with marketing and patient clinical lab support</li>
        </ul>
        </div>
            
            
        
        </div>
        
        <div className={classes.getStarted_image}>
        <Image
                alt="Nature"
                src={photo}
                layout="responsive"
                objectFit="contain" 
                width={847}
                height={634}
                />
        </div>

        
        

                
        
    
    </div>
        </div>
    )
}

export default GetStarted