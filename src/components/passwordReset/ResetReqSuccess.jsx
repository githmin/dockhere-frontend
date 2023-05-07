import { Button, Result } from "antd";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
const App = () => (
  <MainDiv>
    <Result
      status="success"
      title="Please Check Your Email"
      subTitle="Use the link in the email to reset your password"
      // extra={[
      //   <Button type="primary" key="console">
      //     Go Login
      //   </Button>,
      //   // <Button key="buy">Buy Again</Button>,
      // ]}
    />
  </MainDiv>
);
export default App;
