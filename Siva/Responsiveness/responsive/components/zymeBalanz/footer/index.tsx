import React from "react";
import classes from './footer.module.scss'
import icon from '../../../public/images/Group 17.png'
import Image from 'next/image'
import Button from '@mui/material/Button';


const Footer: React.FC = ()=>{
    return(
        <div>
        <div className={classes.footer}>
            <div className={classes.footer_part1}>
           <div> <div className={classes.footer_part1_logo}> <Image
                        alt="Nature"
                        src={icon}
                        layout="responsive"
                        objectFit="contain" 
                        /> 
            </div> 
                        <Button name='Sign In' className={classes.footer_part1_button} variant='outlined'>Sign In</Button> 
             </div> 
            <div><div className={classes.footer_part1_address}> Address</div>
            <div className={classes.footer_part1_addr}>1021 Howard Ave, Ste B
                            San Carlos, CA
                            94070 USA</div>
             </div>
                        
            
              <div>  <div className={classes.footer_part1_hours}>Hours of operation</div>
                <div className={classes.footer_part1_p}><p >hshsgjdhbjadjnk</p>  </div>  </div> 
                
                
                <div className={classes.footer_part1_bigline}></div>
                <div className={classes.footer_part1_link}>links</div>
                
                
                
            </div>     
             </div>
             <div className={classes.part3}> <div className={classes.smallline}></div>
            <div className={classes.copyright}>© Copyright 2020 ZSHOP. All Rights Reserved.</div></div>
            
                </div>
    )
}

export default Footer