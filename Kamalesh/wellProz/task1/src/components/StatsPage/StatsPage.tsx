import React from "react";
import "./StatsPage.css"
const StatsPage = () => {
    return (
        <div className="StatsPage">
            <div className="statswrapper">
                <div className="stats">
                    <div className="statsHeader">
                    60%
                    </div>
                    <div className="statsContent">
                    improvement in patient retention by offering programs.
                    </div>
                </div>
                <div className="stats">
                    <div className="statsHeader">
                    8h+
                    </div>
                    <div className="statsContent">
                    working hours saved per week 
                    </div>
                </div>
                <div className="stats">
                    <div className="statsHeader">
                    50%
                    </div>
                    <div className="statsContent">
                    less in cost to acquire patient
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  StatsPage