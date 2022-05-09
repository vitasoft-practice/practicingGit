import React from "react";
import { useState } from "react";
import classes from './homeScreen.module.scss'
import Image from "next/image";
import imge1 from '../../../public/images/123.jpeg'
import icon from '../../../public/images/zymelogo.png'
import Link from 'next/link'
import Button  from "@mui/material/Button";

const HomeScreen: React.FC = ()=>{
    const [hamburgerOpen, setHamburgerOpen]=useState(false)

        const toggleHamburger=()=>{
            console.log('log')
            setHamburgerOpen(!hamburgerOpen)
        }
        const check=()=>{
            console.log('log1')
            
        }
    return(
        <div>
             {/* using grid and flex        */}
             <div className={classes.home_screen_main}>
            {/* added navbar with responsive to hamburger */}
                <div className={classes.home_screen_main_header}>  
                <header >
                <nav className={classes.home_screen_main_header_navbar}>
               <div className={classes.home_screen_main_header_navbar_icon}>  <Image
                alt="Nature"
                src={icon}
                layout="responsive"
                objectFit="contain" /> </div> 
                    <ul className={hamburgerOpen? classes.home_screen_main_header_navbar_navmenuham :classes.home_screen_main_header_navbar_navmenu}>
                        <Link href='/labTest'>< li className={classes.home_screen_main_header_navbar_navmenu_navitem}>
                            Lab Test
                        </li></Link>
                        <Link href='/labTest'>< li className={classes.home_screen_main_header_navbar_navmenu_navitem}>
                            Z App
                        </li></Link>
                        <Link href='/labTest'>< li className={classes.home_screen_main_header_navbar_navmenu_navitem}>
                            Provider Services
                        </li></Link>
                        <Link href='/labTest'>< li className={classes.home_screen_main_header_navbar_navmenu_navitem}>
                            Support
                        </li></Link>
                        <li className={classes.home_screen_main_header_navbar_navmenu_navitem}> <Button name='LearnMore' className={classes.home_screen_main_header_navbar_navmenu_navitem_button} variant="outlined" onClick={check} >Sign In</Button></li>
                    </ul>
                    <div className={classes.home_screen_main_header_navbar_hamburger} onClick={toggleHamburger}>
                        <div className={classes.home_screen_main_header_navbar_hamburger_bar}></div>
                        <div className={classes.home_screen_main_header_navbar_hamburger_bar}></div>
                        <div className={classes.home_screen_main_header_navbar_hamburger_bar}></div>
                    </div>
                    
                </nav>
             </header> </div>
            <div className={classes.home_screen_main_mainimage}>  <Image
                alt="Nature"
                src={imge1}
                layout="responsive"
                objectFit="contain" 
                width={3000}
                height={2000}
                />
        </div>
            
            {/* <div className={classes.formicon}>
                <Image   alt="icon"
                src={icon}
                layout="fill"
                objectFit="none" 
                width={30}
                height={20} />
            </div> */}
            <div className={classes.home_screen_main_para}>
                 <p className={classes.home_screen_main_para_unit}>A Precision wellness platform acheiving better patient outcomes and fueling practice growth </p>
            </div>
            {/* <div className={classes.here}>Learn More</div> 
              <p className={classes.p1}>Who we are</p>  
            <div className={classes.line}></div>  */}  
        </div>
        </div>
    )
}

export default HomeScreen