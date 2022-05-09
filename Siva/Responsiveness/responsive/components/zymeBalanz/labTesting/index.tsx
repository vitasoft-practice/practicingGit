import React from "react";
import classes from './labTesting.module.scss'
import image1 from '../../../public/images/Group 16.svg'
import icon from '../../../public/images/checked.png'
import Button from '@mui/material/Button';
import Image from "next/image";


const LabTesting: React.FC = ()=>{
    return(
        <div>
            <div className={classes.labTesting}>
            
            <div className={classes.labTesting_image}>
            <Image alt="Nature"
                    src={image1}
                    layout="responsive"
                    objectFit="contain"
                    width={800}
                    height={334}/>
        
        </div>
        <div className={classes.labTesting_text}>
            <div className={classes.labTesting_text_lab}> <h1>Lab Testing </h1></div>  
            
                <div className={classes.labTesting_text_icon}>
                    <Image src={icon} alt="Boost"
                    height="19px"
                    width="17.46px"/>
                    </div>
                <div className={classes.labTesting_text_easy}> Easy to Build online shop </div> 
                
            
            
                <ul className={classes.labTesting_text_ul}>
                    <li>Add Pictures</li>
                    <li>Set yur price</li>
                    <li>Make creative videos</li>
                    <li>choose from templates</li>
                    <li>More..</li>
                </ul>
            
            <Button name='Learn More' className={classes.labTesting_text_button} variant='contained' >Learn More</Button>

        </div>
        </div>
        </div>
    )
}

export default LabTesting