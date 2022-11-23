import React from "react";
import "./helpPage.css"
import supportLogo from "./supportLogo.png"
import seoLogo from "./SEOLOGO.png"
import rocketLogo from "./rocketLogo.png"
const HelpPage = () => {
    return (
        <div className="helpPage">
            <div className="helpPageHeader">Get the help you need every step of the way</div>
            <div className="helpPagewrapper">
                <div className="helpPageContainer">
                    <div className="helpPageContainerlogo">
                        <div className="logoPicture"><img src= { seoLogo } className="Logo" alt="" /></div>
                    </div>
                    <div className="helpPageContainerHeader">Your Online Presence, Enhanced</div>
                    <div className="helpPageContainerContent">Let our Business expert to help you  with everything from store setup to SEO.</div>
                </div>
                <div className="helpPageContainer">
                    <div className="helpPageContainerlogo"> 
                        <div className="logoPicture"><img src= { supportLogo } className="Logo" alt="" /></div>
                    </div>
                    <div className="helpPageContainerHeader">Premium Support</div>
                    <div className="helpPageContainerContent">Contact our experts 12/7, whether you are troubleshooting issues or looking for business advice. </div>
                </div>
                <div className="helpPageContainer">
                    <div className="helpPageContainerlogo">
                        <div className="logoPicture"><img src= { rocketLogo } className="Logo" alt="" /></div>
                    </div>
                    <div className="helpPageContainerHeader">Your Business Elevated</div>
                    <div className="helpPageContainerContent">Focus on the things you love and let us handle the rest </div>
                </div>
            </div>
        </div>
    )
}
export default  HelpPage