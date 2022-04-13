import * as React from "react";
import Invoice from "./invoice";

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
        </div>
        
    )
};
export default Index