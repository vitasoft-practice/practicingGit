import style from "styled-components";
import BasicLayout from "../layout/Basic";
import Input from "../components/Input";
import { InputPropsInterface } from "../interfaces/inputInterface";
import { useEffect, useState } from "react";
import TextArea from '../components/TextArea';
import Style from "../styles/Home.module.css";



import { Button } from '../layout/Button.style'
<<<<<<< HEAD
import textAreaInterface from "../interfaces/textAreaInterface";
import RadioButton from "../components/RadioButton";

=======
import { RadioButton, Item, RadioButtonLabel } from '../layout/RadioButton'
const Title = style.h1`
    color: red;
    `;
>>>>>>> 96e32280417986ad82b6cfff15f529e344f6bce5

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
<<<<<<< HEAD
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
=======
      <div>
        <p>hello</p>
        <Title>Title</Title>
        {/* <Input /> */}
>>>>>>> 96e32280417986ad82b6cfff15f529e344f6bce5
      </div>
      <Button type='button' btnPrimary btnMd autofocus>medium button with primary color</Button>
      <Button type='submit' formmethod='post' btnSm btnSecondary>small button with secondary color</Button>
      <Button type='reset' btnPrimary btnLg value="CSS">large button with primary color</Button>
<<<<<<< HEAD
      <Button btnBlock btnSecondary btnLg name="subject">Block Button With Large Size and secondary color</Button> */}
    </BasicLayout>
=======
      <Button btnBlock btnSecondary btnLg name="subject">Block Button With Large Size and secondary color</Button>


      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="male"

        />
        <RadioButtonLabel />
        <span>Male</span>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="female"

        />
        <RadioButtonLabel />
        <span>Female</span>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="orthers"

        />
        <RadioButtonLabel />
        <span>Others</span>
      </Item>





    </BasicLayout >
>>>>>>> 96e32280417986ad82b6cfff15f529e344f6bce5

  );
};

export default Home;