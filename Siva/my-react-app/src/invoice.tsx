import * as React from "react";
import Fetchdata from './fetchdata';

interface InvoiceListProps {
    details: { 
        cust_name: string;
        new: { id: Number; name: String; mail: String }[];
        logo? : string
    }
}
const Invoice = (props : InvoiceListProps) => {
    
    return(
    
        <div>
            <h1> Hello Invoice </h1>
            <h2>{props.details.cust_name} </h2>
            <Fetchdata/>
        </div>
    )
};
export default Invoice