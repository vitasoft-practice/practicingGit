import React from "react";
import HomeScreen from "./homeScreen";
import Features from "./features";
import GetStarted from "./getStarted";
import LabTesting from "./labTesting";
import Supplement from "./supplement";
import ZymebalanzApp from "./zymebalanzApp";
import ProviderServices from "./providerServices";
import Support from "./support";
import Footer from "./footer";

import classes from './zymeBalanz.module.scss'

const ZymeBalanz: React.FC = ()=>{
    return(
        <div className={classes.prepareForTest}>
            <HomeScreen/>
            <Features/>
            <GetStarted/>
            <LabTesting/>
            <Supplement/>
            <ZymebalanzApp/>
            <ProviderServices/>
            <Support/>
            <Footer/>
        </div>
    )
}

export default ZymeBalanz