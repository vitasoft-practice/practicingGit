import * as React from "react";
import Invoice from "./invoice";
import Dashboard from "./dashboard";
import EventList from "./event";

const Index = () => {
    const data={
        cust_name: "sivakumar",
        new: [{
            id:1,
            name:"sk",
            mail: "sivask"
        },
        {
            id:2,
            name:"skkv",
            mail: "sivaskkv"
        }
        ]
}
    return(
        <div>
            Hello Hi
            <Invoice details={data} />
            <Dashboard/>
            <EventList eventList={1}/>   
         </div>
        
    )
};
export default Index