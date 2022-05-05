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
    
    //arranged the divs with iage first and text next
    //button hover
    
        <div className={classes.main}>
            <div className={classes.part1}>
            
            <div className={classes.part11}>
            <Image alt="Nature"
                    src={image1}
                    layout="responsive"
                    objectFit="contain"
                    width={800}
                    height={334}/>
        
        </div>
        <div className={classes.part12}>
            <div className={classes.lab}> <h1>Lab Testing </h1></div>  
            
                <div className={classes.icon}>
                    <Image src={icon} alt="Boost"
                    height="19px"
                    width="17.46px"/>
                    </div>
                    <div className={classes.easy}> Easy to Build online shop </div> 
                
            
            
                <ul className={classes.ul}>
                    <li>Add Pictures</li>
                    <li>Set yur price</li>
                    <li>Make creative videos</li>
                    <li>choose from templates</li>
                    <li>More..</li>
                </ul>
            
            <Button name='Learn More' className={classes.button} variant='contained' >Learn More</Button>

        </div>
        </div>


    

            <div className={classes.part2}>
                <div className={classes.part21}>
                    <div className={classes.supplement}><h1>Supplement</h1> </div> 
                    <div> <div className={classes.icon2}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.ul2}>
                            choose from a wide variety</div> </div>
                <div> <div className={classes.icon3}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.ul3}> 
                            private label management</div> </div>
            
                <Button name='Sign In' className={classes.button2} variant='contained'>Sign In</Button>
                </div>

                <div className={classes.part22}><Image alt="Nature"
                            src={image2}
                            layout="responsive"
                            objectFit='none'
                            width={1249}
                            height={500}/></div>
                            </div>

            <div className={classes.part3}>
            <div className={classes.part31}>
                <Image alt="Nature"
                src={image3}
                layout="responsive"
                objectFit="none"
                width={829}
                height={334}/>   
                </div> 

                <div className={classes.part32}>
               
                <div className={classes.zymebalanz}><h1>Zymebalanz App</h1> </div> 
                    <div> <div className={classes.icon4}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.ul4}>
                            choose from a wide variety</div> </div>
                <div> <div className={classes.icon5}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.ul5}> 
                            Prrivate label management </div> </div>
            
                <Button name='Sign In' className={classes.button3} variant='contained'>Sign In</Button>
                </div> 

            </div>

                
            <div className={classes.part2}>
                <div className={classes.part21}>
                    <div className={classes.supplement}><h1>Provider Services</h1> </div> 
                    <div> <div className={classes.icon2}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.ul2}>
                            choose from a wide variety</div> </div>
                <div> <div className={classes.icon3}><Image src={icon} alt="Boost"
                            height="19px"
                            width="17.46px"/></div>
                            <div className={classes.ul3}> 
                            private label management</div> </div>
            
                <Button name='Sign In' className={classes.button2} variant='contained'>Sign In</Button>
                </div>

                <div className={classes.part22}><Image alt="Nature"
                            src={image4}
                            layout="responsive"
                            objectFit='none'
                            width={1249}
                            height={500}/></div>
                            </div>   
                  
                
                


        {/* <div className={classes.supplement}>
    <div className={classes.part41}><div>Provider Services</div>
    <div className={classes.ul2}><div className={classes.icon3}><Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/></div>
                add your own Services</div>
  <div className={classes.ul2}> <div className={classes.icon3}><Image src={icon} alt="Boost"
                 height="19px"
                 width="17.46px"/></div>
                consultation</div>
    <Button name='Sign In' className={classes.button2} variant='contained'>Sign In</Button>
    </div>

    <div className={classes.part22}><Image alt="Nature"
                src={image4}
                layout="responsive"
                objectFit='none'
                width={1249}
                height={500}/></div>
                </div>  */}
    </div>

    
    
    
   
)
}
export default Form5