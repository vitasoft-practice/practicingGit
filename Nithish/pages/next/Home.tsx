import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../redux/actions";
import button from '../../styles/button.module.scss';
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

const Home: FC = () =>{

    const dispatch = useDispatch();
    const  { userName }  = useContext(FormContext);
    const state = useSelector((state: boolean)=>state);
    const {signOut} = bindActionCreators(ActionCreators, dispatch)
    return (
        <div>
            <h1>Hello!, {userName}</h1>
            <button className={button.button} onClick = {()=>{dispatch(()=>{signOut()})}}>Sign Out</button>
        </div>
        
    )
}
export default Home;