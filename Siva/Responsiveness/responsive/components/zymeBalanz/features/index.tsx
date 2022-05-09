import React from "react";
import classes from './features.module.scss'
import Image from "next/image";
import icon1 from '../../../public/images/pharmacy copy-1.svg'
import icon2 from '../../../public/images/web-design copy.svg'
import icon3 from '../../../public/images/doctor-3 copy.svg'
import icon4 from '../../../public/images/Practice Boost Copy-Practice Boost.svg'
import icon5 from '../../../public/images/medical-assistance copy.svg'
import icon6 from '../../../public/images/bar-chart copy.svg'


const Features: React.FC = ()=>{
    return(
        <div>
            <div className={classes.main}>
          <div className={classes.row1}>
          <div className={classes.container}>
               
               <Image src={icon1} alt="Boost"
             height="86px"
             width="80.46px"/>
               
               <p className={classes.p}>Boost Practice Revenue</p>
           
           </div>
           <div className={classes.container1}>
           
               <Image src={icon2} alt="Boost"
             height="86px"
             width="80.46px"/>
               
           <p className={classes.p}>Easy to Build online shop</p>
           </div>
           <div className={classes.container2}>
           <Image src={icon3} alt="Boost"
             height="86px"
             width="80.46px"/>
           <p className={classes.p}>Virtual Dipensary</p>
           </div>
          </div>

          <div className={classes.row2}>
          <div className={classes.container3}>
            <Image src={icon4} alt="Boost"
              height="86px"
              width="80.46px"/>
            <p className={classes.p}>TeleHealth Problem</p>
            </div>
            <div className={classes.container4}>
            <Image src={icon5} alt="Boost"
              height="86px"
              width="80.46px"/>
            <p className={classes.p}>Enhanced patient care and results with app</p>
            </div>
            <div className={classes.container5}>
            <Image src={icon6} alt="Boost"
              height="86px"
              width="80.46px"/>
            <p className={classes.p}>Targeted Business Analysis</p>
            </div>
          </div>
           
            

        </div>
        </div>
    )
}
export default Features