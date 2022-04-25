import React, { useEffect, useState } from 'react';
import AppContext from './contexts/context';
// import { useContext } from 'react';

interface info{
    seed: string,
    results:number,
    page:number,
    version:string,
}

interface employee {
        results: any,
        info : info

    };
   
const Fetchdata=()=> {
    const [newval, setnewval]= useState<employee>({results: {}, info: {seed:'',results:0,page: 0, version:''} })
    useEffect(()=> {
        const data=async ()=>{
            const url="https://api.randomuser.me/";
            const response = await fetch(url);
            const data = await response.json();
            setnewval(data)
            console.log(data)
        }
        data()
    }, [] )
    
    
    // const value = useContext(AppContext);
    return (
    <div>
<h1>{newval.info.seed}</h1>
<AppContext.Consumer>
    {/* {value} */}
    {
    ({cust_name}) => {
      if(cust_name='sivakumar') {
        return <h1>Logged in! {cust_name}</h1>

      }
      return <h1>You need to sign in {}</h1>
    
    }
  }
</AppContext.Consumer>
        
        
    </div>
    )
}
export default Fetchdata;