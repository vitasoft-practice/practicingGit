import * as React from "react";

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
        </div>
    )
};
export default Invoice