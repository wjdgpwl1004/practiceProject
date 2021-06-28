import React, { useEffect, useCallback } from 'react';
import { Button } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import Timer from "./Timer";
import useInput from "../hooks/useInput";
import { actions } from '../actions/AuthAction';
import AuthInput from "./common/AuthInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled.div`
  padding: 10px;
`;

const AuthCodeVerification = () => {
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
        dispatch(
            actions.authCodeVerify(
                userEmail,
                authCode,
                issueToken,
            )
        );
    }, [userEmail, authCode, issueToken]);


    return (
        <>
            <FormWrapper>
                <AuthInput text={"인증 코드"} type={"text"} value={authCode} onChange={onChangeAuthCode} errorMessage={authCodeVerificationError}/>
                <Timer countDown={remainMilisecond}/>
                <ButtonWrapper>
                    <Button type="primary" onClick={onClickNext}>다음</Button>
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default AuthCodeVerification;