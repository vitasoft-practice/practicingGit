
import imge1 from '../../public/images/123.jpeg'
import icon from '../../public/images/zymelogo.png'
import Image from 'next/image'
import classes from '../../styles/Home.module.scss'
import Link from 'next/link'
import Button from '@mui/material/Button';
import { useState } from 'react'


const Form=()=>{
    const [hamburgerOpen, setHamburgerOpen]=useState(false)

        const toggleHamburger=()=>{
            console.log('log')
            setHamburgerOpen(!hamburgerOpen)
        }
        const check=()=>{
            console.log('log1')
            
        }
    return (
        
        
        <div> 

            {/* using grid and flex        */}
            <div className={classes.main}>
            {/* added navbar with responsive to hamburger */}
                <div className={classes.header}>  
                <header >
                <nav className={classes.navbar}>
               <div className={classes.icon}>  <Image
                alt="Nature"
                src={icon}
                layout="responsive"
                objectFit="contain" /> </div> 
                    <ul className={hamburgerOpen? classes.navmenuham :classes.navmenu}>
                        <Link href='/labTest'>< li className={classes.navitem}>
                            Lab Test
                        </li></Link>
                        <Link href='/labTest'>< li className={classes.navitem}>
                            Z App
                        </li></Link>
                        <Link href='/labTest'>< li className={classes.navitem}>
                            Provider Services
                        </li></Link>
                        <Link href='/labTest'>< li className={classes.navitem}>
                            Support
                        </li></Link>
                        <li className={classes.navitem}> <Button name='LearnMore' className={classes.button} variant="outlined" onClick={check} >Sign In</Button></li>
                    </ul>
                    <div className={classes.hamburger} onClick={toggleHamburger}>
                        <div className={classes.bar}></div>
                        <div className={classes.bar}></div>
                        <div className={classes.bar}></div>
                    </div>
                    
                </nav>
             </header> </div>
            <div className={classes.mainimage}>  <Image
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
            <div className={classes.para}>
                 <p className={classes.para_unit}>A Precision wellness platform acheiving better patient outcomes and fueling practice growth </p>
            </div>

            
           
                          
             
             
            
                 
           
            
            {/* <div className={classes.here}>Learn More</div> 
              <p className={classes.p1}>Who we are</p>  
            <div className={classes.line}></div>  */}
            
              
        
            
            
            
        
        </div>
        </div>
        
    )

}
export default Form
