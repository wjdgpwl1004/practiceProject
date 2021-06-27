import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Button } from "antd";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../actions/UserAction';

const FormWrapper = styled.div`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const { loginError } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback(() => {
        dispatch(
            actions.loginRequest(
                email,
                password
            )
        );
    }, [email, password]);

    useEffect(() => {
        if(loginError) {
            alert(loginError);
        }
    }, [loginError]);



    return (
        <FormWrapper>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" onClick={onSubmitForm}>로그인</Button>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default LoginForm;