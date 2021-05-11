import React from "react";
import { SigninContainer, SigninH1, BtnWrap, BtuSignin } from "./SigninElements";

const Signin = () => {
  return (
    <>
      <SigninContainer>
        <SigninH1>Coming soon! 😍</SigninH1>
        <BtnWrap>
          <BtuSignin to="/">กลับสู่หน้าหลัก</BtuSignin>
        </BtnWrap>
      </SigninContainer>
    </>
  );
};

export default Signin;
