import React from "react";
import icon from '../../../public/images/checked.png'
import Button from '@mui/material/Button';
import Image from "next/image";
import classes from './providerServices.module.scss'
import image4 from '../../../public/images/Group 14.svg'

const ProviderServices: React.FC = ()=>{
    return(
        <div>
            <div className={classes.provider}>
                <div className={classes.provider_text}>
                    <div className={classes.provider_text_provider}><h1>Provider Services</h1> </div> 
                    <div> <div className={classes.provider_text_icon2}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.provider_text_ul2}>
                            choose from a wide variety</div> </div>
                <div> <div className={classes.provider_text_icon3}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.provider_text_ul3}> 
                            private label management</div> </div>
            
                <Button name='Sign In' className={classes.provider_text_button2} variant='contained'>Sign In</Button>
                </div>

                <div className={classes.provider_image}><Image alt="Nature"
                            src={image4}
                            layout="responsive"
                            objectFit='none'
                            width={1249}
                            height={500}/></div>
                            </div> 
        </div>
    )
}

export default ProviderServices