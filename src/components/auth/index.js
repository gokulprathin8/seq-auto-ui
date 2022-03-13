import React from "react";
import {OutlineButton} from "../common/common.styles";
import {LoginSection, SignInText, LabelTitle, AuthInput, AuthContainer} from "./login.styles";
import {useForm} from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <LoginSection>
                <SignInText>SignIn</SignInText>

                <AuthContainer>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AuthInput {...register("emailField", {required: true})} id="email-address" placeholder="john.doe@example.com" type="email"/>
                        {errors.emailField && <span>This field is required</span>}
                        <AuthInput id="passwordField" placeholder="password" type="password" {...register("password-field")}/>
                        {errors.passwordField && <span>This field is required</span>}
                        <OutlineButton type="submit">Login</OutlineButton>
                    </form>

                </AuthContainer>
                {/*<OutlineButton onClick={() => console.log('test')}>Login</OutlineButton>*/}

            </LoginSection>

        </div>
    )
}

export default Login;