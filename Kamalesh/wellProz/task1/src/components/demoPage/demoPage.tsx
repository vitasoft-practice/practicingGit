import React from "react";

import "./demoPage.css"
const DemoPage = () => {
    return (
        <div className="DemoPage">
            <div className="demoWrapper">
                <div className="topParent">
                    <div className="subParent">
                    <div className="demoForm">
                        <div className="demoFormWrapper">
                            <div className="demoFormFields">
                                <div className="demoHeader">
                                Request a Demo
                                </div>
                                <div className="demoInputFields">
                                    <div className="demoUserInput"><input placeholder="First Name" type="text" /></div>
                                    <div className="demoUserInput"><input placeholder="Last Name" type="text" /></div>
                                    <div className="demoUserInput"><input placeholder="Email Address" type="text" /></div>
                                    <div className="demoUserInput"><input placeholder="Pactice Name" type="text" /></div>
                                    <div className="demoUserInput"><input placeholder="Contact Number" type="text" /></div>
                                    <div className="demoUserInput"><input placeholder="How did you hear about us" type="text" /></div>
                                </div>
                                <div className="demoRequest">Send Request</div>
                            </div>
                        </div>
                    </div>
                    <div className="demoInfo">
                        <div className="demoInfowrapper">
                            <div className="demoInfoHeader">Ready for a stress-free way to help your practice thrive?</div>
                            <div className="demoInfoContent"><span style={{textDecoration: 'underline'}}>Increase visits</span>, <span style={{textDecoration: 'underline'}}>wow patients</span>, and <span style={{textDecoration: 'underline'}}>save staff time</span> with <span className="WellProzSpan">WellProZ.</span></div>
                            <div className="demoButton">Try it For Free</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  DemoPage