import Image from "next/image"
import classes from './form4.module.scss'
import photo from '../../public/images/Group 30.png'
import icon from '../../public/images/checked.png'
import image1 from '../../public/images/Group 16.svg'
import Button from '@mui/material/Button';



const Form4=()=>{
    return (
   <>
        <div className={classes.main}>
        <div className={classes.part1}>
            
            <p className={classes.first}>Easy to get start</p>
            <div className={classes.second}><h1>$0</h1> <p className={classes.month}>/month</p> </div>
            <div className={classes.line}></div>
            <div className={classes.third}>
            <ul className={classes.ul}>
            <li>   <div className={classes.image}>
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
                        
                <div className={classes.image}>
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
                <div className={classes.image}>
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
        
        <div className={classes.part2}>
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
    
    </>
    
    )
}
export default Form4