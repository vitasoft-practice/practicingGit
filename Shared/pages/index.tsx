import style from "styled-components";
import BasicLayout from "../layout/Basic";
import Input from "../components/Input";
import { InputPropsInterface } from "../interfaces/inputInterface";
import { useEffect, useState } from "react";
import TextArea from '../components/TextArea';
import Style from "../styles/Home.module.css";



import { Button } from '../layout/Button.style'
import textAreaInterface from "../interfaces/textAreaInterface";
import RadioButton from "../components/RadioButton";


const Home = () => {

  const [borderColortext, setBorderColortext] = useState("");
  const [placeholderText, setPlaceHolderText] = useState("Enter admin");
  const [inputVal, setInputVal] = useState("");
  const [placeholderColor, setPlaceholderColor] = useState("");
  const [textColor, setTextColor] = useState("#fff");
  const [textValue, setTextValue] = useState("");
  const green = "#4AA96C";
  const red = "#F54748";

  const handleClick = () => {
    if (inputVal != "admin") {
      setBorderColortext(red);
      setInputVal("");
      setPlaceholderColor(red);
      setPlaceHolderText("Invalid Input");
    } else {
      setBorderColortext(green);
      setTextColor(green);
    }
  }

  const textAreaProps: textAreaInterface = {
    value: textValue,
    name: "textArea",
    id: "textAres",
    placeholder: "Enter something.......",
    cols: 80,
    rows: 4,
    onstate: setTextValue
  }

  const inputProps: InputPropsInterface = {
    borderColor: borderColortext,
    value: inputVal,
    type: "text",
    placeholderColor: placeholderColor,
    textColor: textColor,
    placeholder: placeholderText,
    onstate: setInputVal
  }

  return (
    <BasicLayout>
      <div className={Style.flex}>
        <Input props={inputProps} />
        <button onClick={handleClick}>Check</button>
        <TextArea props={textAreaProps} />
        <RadioButton />
      </div>

      {/* <div>
        <p>hello</p>
        <Title>Title</Title>
        <Input props={inputProps} />
      </div>
      <Button type='button' btnPrimary btnMd autofocus>medium button with primary color</Button>
      <Button type='submit' formmethod='post' btnSm btnSecondary>small button with secondary color</Button>
      <Button type='reset' btnPrimary btnLg value="CSS">large button with primary color</Button>
      <Button btnBlock btnSecondary btnLg name="subject">Block Button With Large Size and secondary color</Button> */}
    </BasicLayout>

  );
};

export default Home;