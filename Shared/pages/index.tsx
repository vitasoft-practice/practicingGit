import style from "styled-components";
import BasicLayout from "../layout/Basic";
<<<<<<< HEAD
import Input from "../components/Input";
import { InputPropsInterface } from "../interfaces/inputInterface";
import { useContext, useState } from "react";
import { InputContext, InputProvider } from "../contexts/InputContext";



=======
// import Input from "../components/Input";
import { Button } from '../layout/Button.style'
const Title = style.h1`
  color: red;
`;
>>>>>>> 4cdd9a442d45a15ef08cbaa80c34d127ca92363f

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
<<<<<<< HEAD
      <InputProvider>
          <Input props={inputProps} />
          <button onClick={handleClick}>Check</button>
      </InputProvider>  
=======
        <div>
          <p>hello</p>
          <Title>Title</Title>
          {/* <Input /> */}
        </div>
         <Button type='button' btnPrimary btnMd autofocus>medium button with primary color</Button>
        <Button type='submit' formmethod='post' btnSm btnSecondary>small button with secondary color</Button>
        <Button type='reset' btnPrimary btnLg value="CSS">large button with primary color</Button>
        <Button btnBlock btnSecondary btnLg name="subject">Block Button With Large Size and secondary color</Button>
>>>>>>> 4cdd9a442d45a15ef08cbaa80c34d127ca92363f
    </BasicLayout>
   
  );
};

export default Home;