import React from "react";
import icon from '../../../public/images/checked.png'
import Button from '@mui/material/Button';
import Image from "next/image";
import classes from './zymebalanzApp.module.scss'
import image3 from '../../../public/images/Group 29.svg'


const ZymebalanzApp: React.FC = ()=>{
    return(
        <div>
            <div className={classes.zymebalanzApp}>
            <div className={classes.zymebalanzApp_image}>
                <Image alt="Nature"
                src={image3}
                layout="responsive"
                objectFit="none"
                width={829}
                height={334}/>   
                </div> 

                <div className={classes.zymebalanzApp_text}>
               
                <div className={classes.zymebalanzApp_text_zymebalanz}><h1>Zymebalanz App</h1> </div> 
                    <div> <div className={classes.zymebalanzApp_text_icon4}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.zymebalanzApp_text_ul4}>
                            choose from a wide variety</div> </div>
                <div> <div className={classes.zymebalanzApp_text_icon5}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.zymebalanzApp_text_ul5}> 
                            Prrivate label management </div> </div>
            
                <Button name='Sign In' className={classes.zymebalanzApp_text_button3} variant='contained'>Sign In</Button>
                </div> 

            </div>
        </div>
    )
}

export default ZymebalanzApp