import classes from './form5.module.scss'
import image1 from '../../public/images/Group 16.svg'
import image2 from '../../public/images/Group 25.png'
import icon from '../../public/images/checked.png'
import Image from 'next/image'
import Button from '@mui/material/Button';
import image3 from '../../public/images/Group 29.svg'
import image4 from '../../public/images/Group 14.svg'

const Form5=()=>{
return(
    
    
    <div className={classes.main}>
        
        
        <div className={classes.part11}>
        <Image alt="Nature"
                src={image1}
                layout="responsive"
                objectFit="fill"
                width="949px"
                height="340px"/>
    
    </div>
    <div className={classes.part12}>
       <div className={classes.lab}>Lab Testing</div> 
        
            <div className={classes.icon}>
                <Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/>
                </div>
            <p className={classes.p}>Easy to Build online shop</p>
        
        
            <ul className={classes.ul}>
                <li>Add Pictures</li>
                <li>Set yur price</li>
                <li>Make creative videos</li>
                <li>choose from templates</li>
                <li>More..</li>
            </ul>
        
        <Button name='Learn More' className={classes.button} variant='contained' >Learn More</Button>

    </div>

    <div className={classes.part21}>Supplement</div>
    <div className={classes.ul2}><div className={classes.icon3}><Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/></div>
                choose from a wide variety</div>
  <div className={classes.ul2}> <div className={classes.icon3}><Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/></div>
                priate label management</div>
    <Button name='Sign In' className={classes.button2} variant='contained'>Sign In</Button>

    <div className={classes.part22}><Image alt="Nature"
                src={image2}
                layout="responsive"
                objectFit="none"
                width="1249px"
                height="440px"/></div>

                
                <div className={classes.image3}>
                <Image alt="Nature"
                src={image3}
                layout="responsive"
                objectFit="none"
                width="829px"
                height="537px"/>   
                </div> 
                <div className={classes.zyme}>
                <span>Zymebalanz App</span>
                
                <div className={classes.ul3}>    <div className={classes.icon4}><Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/></div>
                choose from a wide variety</div>
  <div className={classes.ul3}> <div className={classes.icon4}><Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/></div>
                priate label management</div>
                <Button name='Sign In' className={classes.button3} variant='contained'>Sign In</Button>

                </div>   
                
               
    
      <div>  <div className={classes.last}>Provider Services
        add your own Services
        consultation</div>
        <div> <Image alt="Nature"
                src={image4}
                layout="responsive"
                objectFit="none"
                width="829px"
                height="437px"/> </div></div>
       
    
    
    
    

    
   
    </div>

    
    
    
   
)
}
export default Form5