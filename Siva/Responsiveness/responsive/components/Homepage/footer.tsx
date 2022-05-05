import classes from '../../components/Homepage/footer.module.scss'
import icon from '../../public/images/Group 17.png'
import Image from 'next/image'
import Button from '@mui/material/Button';

const Footer=()=>{
return(
    <div>
    <div className={classes.main}>
       <div className={classes.part1}>
       <div className={classes.logo}> <Image
                alt="Nature"
                src={icon}
                layout="responsive"
                objectFit="contain" 
                /> </div> 
                <Button name='Sign In' className={classes.button} variant='outlined'>Sign In</Button> 
                <div className={classes.address}> Address</div>
                <div className={classes.addr}>1021 Howard Ave, Ste B
                    San Carlos, CA
                    94070 USA</div>
                
      </div>
      <div className={classes.part2}>
          <div className={classes.hours}>Hours of operation</div>
          <p className={classes.p}>hshsgjdhbjadjnk</p>
          <div className={classes.bigline}></div>
          
          <div className={classes.link}>links</div>
          
      </div>

      
      
      </div>
      <div className={classes.part3}> <div className={classes.smallline}></div>
      <div className={classes.copyright}>© Copyright 2020 ZSHOP. All Rights Reserved.</div></div>
      </div>
)
}
export default Footer