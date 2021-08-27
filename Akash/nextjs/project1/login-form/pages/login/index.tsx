import { NextPage } from "next"
import Navigation from "../../components/Navigation";


const login : NextPage = () => {
    return (
        
        <div>
            
            <div className= "login">
                <div className="login-triangle"></div>
                
                <h2 className="login-header">Log in</h2>

                <form className="login-container">
                    <p><input type="email" placeholder="Email"></input></p>
                    <p><input type="password" placeholder="Password"></input></p>
                    <p><input type="submit" value="Log in"></input></p>
                </form>
            </div>
        </div>
    );
}

export default login ;