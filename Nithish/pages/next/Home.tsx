import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkProps } from "next/link";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../redux/actions";
import button from '../../styles/button.module.scss';
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import { GetServerSideProps } from "next";
import Link from "next/link";
import home from "../../styles/Home.module.scss";




const Home : FC= () =>{
    const dispatch = useDispatch();
    const  { userName }  = useContext(FormContext);
    const state = useSelector((state: boolean)=>state);
    const {signOut} = bindActionCreators(ActionCreators, dispatch)
    return (
        <div className={home.div}>
            <h1>Hello!, {userName}</h1>
            <button className={button.button} onClick = {()=>{dispatch(()=>{signOut()})}}>Sign Out</button><br/>
            <Link href={"/next/"+userName}>Click this link to see Dynamic routing in action</Link>
        </div>
        
    )
}
export default Home;