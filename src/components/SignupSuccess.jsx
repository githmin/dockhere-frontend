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
      title="Last Step! Please Check Your Email 🥳🎉"
      subTitle="Account will be activated once you verify your account using the verification link sent to the email you provided"
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
