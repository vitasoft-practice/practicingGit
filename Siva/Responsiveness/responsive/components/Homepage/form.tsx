
import imge1 from '../../public/images/123.jpeg'
import icon from '../../public/images/zymelogo.png'
import Image from 'next/image'
import classes from '../../styles/Home.module.scss'
import Link from 'next/link'
import Button from '@mui/material/Button';


const Form=()=>{
    return (
        <div>
            <div className={classes.main}>
            
            <div className={classes.form}>
            {/* <div className={classes.formicon}>
                <Image   alt="icon"
                src={icon}
                layout="fill"
                objectFit="none" 
                width={30}
                height={20} />
            </div> */}
            <div className={classes.para}>
                 <p>A Precision wellness platform acheiving better patient outcomes and fueling practice growth </p>
            </div>

            
            <Link href='/labTest'><div className={classes.logo}>
                            <Image  alt="icon"
                                src={icon}
                                layout="responsive"
                                objectFit="contain" 
                                />
            </div></Link>
            <Image
                alt="Nature"
                src={imge1}
                layout="responsive"
                objectFit="contain" 
                width={3000}
                height={2000}
                />
                 
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                
                <Link href='/labTest'><li className={classes.li}>Lab Test</li></Link> 
                <Link href='/supplement'><li className={classes.li}>Supplememt</li></Link> 
                <Link href='/ZApp'><li className={classes.li}>Z App</li></Link> 
                <Link href='/providerServices'><li className={classes.li}>Provider Services</li></Link>
                <Link href='/providerServices'><li className={classes.li}>Support</li></Link>
                <Link href='/'><li className={classes.li}>
                    
                    <Button name='Sign In' className={classes.button} variant='outlined'>Sign In</Button> 
                
                </li></Link>
                </ul>
            </nav>
            <div className={classes.here}>
            <h5>Learn More</h5>
              <p>Who we are</p>  
            <div className={classes.line}></div> 
            </div>
              
        
            </div>
            
            
        
        </div>
        </div>
    )

}
export default Form
