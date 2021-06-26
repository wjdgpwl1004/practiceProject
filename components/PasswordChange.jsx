import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Button } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import { actions } from '../actions/AuthAction';
import AuthInput from "./common/AuthInput";

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

const PasswordChange = () => {
    const [password, onChangePassword] = useInput('');
    const [confirmPassword, onChangeConfirmPassword] = useInput('');
    const [passwordConfirmError, onChangePasswordConfirmError] = useState(false);
    const [hasPasswordNumberOrSymbolError, onChangeHasPasswordNumberOrSymbolError] = useState(false);
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

    //* 비밀번호가 숫자나 특수기호를 포함하는지
    const isPasswordHasNumberOrSymbol = useMemo(
        () =>
            !(
                /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) ||
                /[0-9]/g.test(password)
            ), [password]);


    const onSubmitForm = useCallback(() => {
        console.log(isPasswordHasNumberOrSymbol);
        if(isPasswordHasNumberOrSymbol) {
            return onChangeHasPasswordNumberOrSymbolError(true);
        }
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
            <FormWrapper>
                <AuthInput text={"비밀번호"} type={"text"} value={password} onChange={onChangePassword}/>
                {hasPasswordNumberOrSymbolError ? (<ErrorMessage>비밀번호는 숫자나 특수기호를 포함해야 합니다.</ErrorMessage>) : null}
                <AuthInput text={"비밀번호 확인"} type={"text"} value={confirmPassword} onChange={onChangeConfirmPassword} errorMessage={passwordChangeError}/>
                {passwordConfirmError ? (<ErrorMessage>비밀번호를 확인해 주세요.</ErrorMessage>) : null}
                <ButtonWrapper>
                    <Button type="primary" onClick={onSubmitForm}>비밀번호 변경</Button>
                </ButtonWrapper>

            </FormWrapper>
        </>
    );
};

export default PasswordChange;