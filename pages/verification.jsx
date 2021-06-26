import React, { useEffect, useCallback } from 'react';
import AppLayout from "../components/AppLayout";
import {Button, Form, Input} from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import Timer from "../components/Timer";
import { AUTH_CODE_VERIFICATION_REQUEST } from "../reducers/auth";
import useInput from "../hooks/useInput";

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

const Verification = () => {
    const {
        authCodePending,
        issueToken,
        remainMilisecond,
        authCodeVerificationError,
        userEmail
    } = useSelector((state) => state.auth);
    const [authCode, onChangeAuthCode] = useInput('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authCodePending && !issueToken) {
            alert('비정상적인 접근입니다.');
            Router.push('/');
        }
    }, [authCodePending, issueToken]);

    if (!authCodePending && !issueToken) {
        return null;
    }

    const onClickNext = useCallback(() => {
        console.log('authCode = ', authCode);
        dispatch({
            type: AUTH_CODE_VERIFICATION_REQUEST,
            data: {
                email: userEmail,
                authCode,
                issueToken,
            },
        });
    }, [userEmail, authCode, issueToken]);


    return (
        <>
            <AppLayout>
                <FormWrapper>
                    <div>
                        <label htmlFor="auth-code">인증 코드</label>
                        <br />
                        <Input name="auth-code" type="text" value={authCode} onChange={onChangeAuthCode} required />
                    </div>
                    <Timer countDown={remainMilisecond}/>
                    {authCodeVerificationError ? (<ErrorMessage>{authCodeVerificationError}</ErrorMessage>) : null}
                    <ButtonWrapper>
                        <Button type="primary" onClick={onClickNext}>다음</Button>
                    </ButtonWrapper>

                </FormWrapper>
            </AppLayout>
        </>
    );
};

export default Verification;