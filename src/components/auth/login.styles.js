import styled from "styled-components";
import {Container} from "react-bootstrap";

export const SignInText = styled.h1`
    font-weight: lighter;
    font-family: 'soraRegular',serif;
    font-size: 20px;
`;

export const LoginSection = styled(Container)`
    text-align: center;
`;

export const LabelTitle = styled.p`
    font-size: 14px;
`;

export const AuthInput = styled.input`
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18%;
    border-radius: 4px;
    border: darkgrey solid 2px;
    margin: 0 auto;
  
    &:hover {
      border: #85C88A solid 2px;
    }
`;

export const AuthContainer = styled.div`
    
`;