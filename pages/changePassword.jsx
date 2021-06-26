import React, {useCallback, useEffect, useState} from 'react';
import AppLayout from "../components/AppLayout";
import {Button, Input} from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import Router from 'next/router';
import {actions} from '../actions/AuthAction';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  color: red;
`;

const FormWrapper = styled.div`
  padding: 10px;
`;

const ChangePassword = () => {
    const [password, onChangePassword] = useInput('');
    const [confirmPassword, onChangeConfirmPassword] = useInput('');
    const [passwordConfirmError, onChangePasswordConfirmError] = useState(false);
    const dispatch = useDispatch();

    const {
        authCodeConfirmToken,
        userEmail,
        passwordChangeError,
    } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!authCodeConfirmToken) {
            alert('비정상적인 접근입니다.');
            return Router.push('/');
        }
    }, [authCodeConfirmToken]);

    const onSubmitForm = useCallback(() => {
        if (password !== confirmPassword) {
            return onChangePasswordConfirmError(true);
        }
        dispatch(
            actions.passwordChange(
                userEmail,
                authCodeConfirmToken,
                password,
                confirmPassword,
            )
        )
    }, [password, confirmPassword]);

    if (!authCodeConfirmToken) {
        return null;
    }

    return (
        <>
            <AppLayout>
                <FormWrapper>
                    <div>
                        <label htmlFor="auth-code">비밀번호</label>
                        <br />
                        <Input name="auth-code" type="text" value={password} onChange={onChangePassword} required />
                    </div>
                    {/*{authCodeVerificationError ? (<ErrorMessage>{authCodeVerificationError}</ErrorMessage>) : null}*/}
                    <div>
                        <label htmlFor="auth-code">비밀번호 확인</label>
                        <br />
                        <Input name="auth-code" type="text" value={confirmPassword} onChange={onChangeConfirmPassword} required />
                    </div>
                    {passwordConfirmError ? (<ErrorMessage>비밀번호를 확인해 주세요.</ErrorMessage>) : null}
                    {passwordChangeError ? (<ErrorMessage>{passwordChangeError}</ErrorMessage>) : null}
                    <ButtonWrapper>
                        <Button type="primary" onClick={onSubmitForm}>비밀번호 변경</Button>
                    </ButtonWrapper>

                </FormWrapper>
            </AppLayout>
        </>
    );
};

export default ChangePassword;