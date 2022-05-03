import { useEffect, useState } from "react";
import Image from "next/image";
// import classes from '../styles/globals.scss';
import classes from '../styles/Home.module.scss'
import Link from 'next/link'






const Layout=({children}:any)=> {
    return(
        <>
        
        {children}
        </>
    )
  
}

export default Layout;