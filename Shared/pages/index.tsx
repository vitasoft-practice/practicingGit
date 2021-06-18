import styled from "styled-components";
import BasicLayout from "../layout/Basic";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
        <div>
          <p>hello</p>
          <Title>Title</Title>
        </div>
    </BasicLayout>
   
  );
};

export default Home;