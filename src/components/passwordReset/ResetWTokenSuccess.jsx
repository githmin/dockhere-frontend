import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
const ResetWTokenSuccess = () => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      <Result
        status="success"
        title="Reset Successfull"
        subTitle="You can log back in safely"
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </Button>,
          // <Button key="buy">Buy Again</Button>,
        ]}
      />
    </MainDiv>
  );
};
export default ResetWTokenSuccess;
