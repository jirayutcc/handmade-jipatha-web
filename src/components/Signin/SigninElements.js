import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SigninContainer = styled.div`
  background: #ec7063;
  padding: 120px 0;
  height: 840px;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const SigninH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BtuSignin = styled(LinkR)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 16px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;