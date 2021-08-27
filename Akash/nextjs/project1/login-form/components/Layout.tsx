import React from 'react'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation'
const Layout : React.FC<{}>  = ({children}) => {
    return (
        <div>
            <Navigation />
            {children}

        </div>
        
        
    )
}

export default Layout
