import style from "styled-components";
import BasicLayout from "../layout/Basic";
import Input from "../components/Input";
const Title = style.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
        <div>
          <p>hello</p>
          <Title>Title</Title>
          <Input />
        </div>
    </BasicLayout>
   
  );
};

export default Home;