import React from "react";
import {OutlineButton} from "../common/common.styles";
import {LoginSection, SignInText} from "./login.styles";

const Login = () => {
    return (
        <div>
            <LoginSection>
                <SignInText>SignIn</SignInText>



                <OutlineButton>Login</OutlineButton>

            </LoginSection>

        </div>
    )
}

export default Login;