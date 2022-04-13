import React from 'react';
import Datashare from './context/context';


class Fetchdata extends React.Component {
    state = { 
        loading : true, 
        person : null 
    };
    
    async componentDidMount() {
        const url="https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        this.setState({
            loading: false,
            person : data.results[0]
        });

        
    }
    render() { 
        
        return ( 
            <Datashare.Provider value={this.state}>
                return(
                        <div>
                            {this.state.loading || !this.state.person ? 
                            ( <div>...loading</div> ) :
                            ( <div>
                                <div>...this.state.person.name</div>
                                {/* <div>this.state.person.n</div> */}
                            </div> ) }
                        </div>
                        ) 
            </Datashare.Provider>
           
                // <Datashare.Consumer>{
                //     ()=>{
                //         return(
                //             <div>
                //             {this.state.loading || !this.state.person ? 
                //                 ( <div>...loading</div> ) :
                //                 ( <div>
                //                     <div>...this.state.person.name</div>
                //                     {/* <div>this.state.person.n</div> */}
                //                     </div> ) }
                //             </div>
                //         )
                //     }
                //     }
               
                // </Datashare.Consumer>
            
         );
    }
}
// Fetchdata.contextType = Datashare;
export default Fetchdata;