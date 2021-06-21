import style from "styled-components";
import BasicLayout from "../layout/Basic";
import Input from "../components/Input";
import { InputPropsInterface } from "../interfaces/inputInterface";
import { useContext, useState } from "react";
import { InputContext, InputProvider } from "../contexts/InputContext";




const Home = () => {

  const {borderColortext, setBorderColortext , inputVal, setInputVal,setPlaceHolderText , placeholderText} = useContext(InputContext);
  const green = "#4AA96C";
  const red = "#F54748";
  console.log(placeholderText,inputVal,borderColortext);
  const handleClick = () =>{
    if(inputVal!="admin"){
      setBorderColortext(red);
      setInputVal("");
      setPlaceHolderText("Invalid Input");
    }else{
      setBorderColortext(green);
    }
  }

  const inputProps: InputPropsInterface = {
    borderColor: borderColortext,
    value: inputVal,
    type: "text",
    placeholder: placeholderText,
  }

  return (
    <BasicLayout>
      <InputProvider>
          <Input props={inputProps} />
          <button onClick={handleClick}>Check</button>
      </InputProvider>  
    </BasicLayout>
   
  );
};

export default Home;