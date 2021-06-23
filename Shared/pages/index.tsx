import style from "styled-components";
import BasicLayout from "../layout/Basic";
// import Input from "../components/Input";
import { Button } from '../layout/Button.style'
import { RadioButton, Item, RadioButtonLabel } from '../layout/RadioButton'
const Title = style.h1`
    color: red;
    `;

const Home = () => {
  return (
    <BasicLayout>
      <div>
        <p>hello</p>
        <Title>Title</Title>
        {/* <Input /> */}
      </div>
      <Button type='button' btnPrimary btnMd autofocus>medium button with primary color</Button>
      <Button type='submit' formmethod='post' btnSm btnSecondary>small button with secondary color</Button>
      <Button type='reset' btnPrimary btnLg value="CSS">large button with primary color</Button>
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

  );
};

export default Home;