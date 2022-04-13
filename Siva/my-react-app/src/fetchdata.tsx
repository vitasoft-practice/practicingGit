import React from 'react';
import App from './App';


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
           
            <div>
                
                {this.state.loading || !this.state.person ? 
                ( <div>...loading</div> ) :
                ( <div>
                    <div>this.state.person.name</div>
                    {/* <div>this.state.person.n</div> */}
                    </div> ) }
                <App data1={this.state}/>
            </div>
         );
    }
}
 
export default Fetchdata;