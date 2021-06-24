
import BasicLayout from "../layout/Basic";
// import NavBar from "../components/NavBar";
import { CheckBox, CheckDiv, CheckLabel, CheckItem } from "../layout/CheckBox.style";
import { Button } from '../layout/Button.style'

const Home = () => {
  return (
    <>
      <div>Hello</div>
      <Button disable>Disabled Button</Button>
      <CheckDiv>
        <CheckItem>
          <CheckBox disabled value="Reactjs" />
          <CheckLabel disabled>Reactjs</CheckLabel>
        </CheckItem>
        <CheckItem>
          <CheckBox value="Typescript" />
          <CheckLabel>Typescript</CheckLabel>
        </CheckItem>
        <CheckItem>
          <CheckBox value="Nextjsjs" />
          <CheckLabel>Nextjs</CheckLabel>
        </CheckItem>

      </CheckDiv>
    </>

  );
};

export default Home;