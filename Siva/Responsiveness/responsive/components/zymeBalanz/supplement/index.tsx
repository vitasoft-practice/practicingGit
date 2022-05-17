import React from "react";
import image2 from '../../../public/images/Group 25.png'
import icon from '../../../public/images/checked.png'
import Button from '@mui/material/Button';
import Image from "next/image";
import classes from './supplement.module.scss'

const Supplement: React.FC = ()=>{
    return(
        <div>
            <div className={classes.supplement}>
                <div className={classes.supplement_text}>
                    <div className={classes.supplement_text_supplement}><h1>Supplement</h1> </div> 
                    <div> <div className={classes.supplement_text_icon2}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                    <div className={classes.supplement_text_ul2}>
                            choose from a wide variety</div> </div>
                <div> <div className={classes.supplement_text_icon3}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.supplement_text_ul3}> 
                            private label management</div> </div>
            
                <Button name='Sign In' className={classes.supplement_text_button2} variant='contained'>Sign In</Button>
                </div>

                <div className={classes.supplement_image}><Image alt="Nature"
                            src={image2}
                            layout="responsive"
                            objectFit='fill'
                            /></div>
            </div>
        </div>
    )
}

export default Supplement