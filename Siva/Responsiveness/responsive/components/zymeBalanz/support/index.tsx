import React from "react";
import classes from './support.module.scss'
import image from '../../../public/images/Group 20.png'
import icon1 from '../../../public/images/Group 28.svg'
import icon2 from '../../../public/images/Group 31.svg'
import icon3 from '../../../public/images/Group 27.svg'
import Button from '@mui/material/Button';
import Image from 'next/image'


const Support: React.FC = ()=>{
    return(
        <div>
            <div className={classes.main}>
    {/* <span className={classes.support}> Support</span> */}
            <div className={classes.row1}>
                
            <div className={classes.container}>
                
                <Image src={icon1} alt="Boost"
            height="86px"
            width="80.46px"/>
                
                <p className={classes.p}>Boost Practice Revenue</p>
                <div><Button name='Sign In' className={classes.buttonbig1} variant='contained'> Sign In</Button>  </div>
            
            </div>
            <div className={classes.container1}>
            
                <Image src={icon2} alt="Boost"
            height="86px"
            width="80.46px"/>
                
            <p className={classes.p}>Easy to Build online shop</p>
            <div><Button name='Sign In' className={classes.buttonbig2} variant='contained'> Sign In</Button>  </div>
            </div>
            <div className={classes.container2}>
            <Image src={icon3} alt="Boost"
            height="86px"
            width="80.46px"/>
            <p className={classes.p}>Virtual Dipensary</p>
            <div><Button name='Sign In' className={classes.buttonbig3} variant='contained'> Sign In</Button>  </div>
            </div>
            </div>
            
            <div className={classes.row22}>
                 <div className={classes.para}> We're here to help! Give us a shout — our support team works directly with practitioners and patients to take the hassle out of healthcare.</div>
            <div className={classes.para2}>You’re passionate about helping patients. We’re passionate about helping your practice grow. Our precision wellness platform does both.</div>             
            
            <div><Button name='Sign In' className={classes.button} variant='contained'>Learn More</Button> </div></div>
            
        
       
         
        <div className={classes.image}> <Image alt="Nature"
                src={image}
                layout="responsive"
                objectFit='fill'
                width={1436}
                height={829}/> </div> 
        
        </div>
        </div>
    )
}

export default Support