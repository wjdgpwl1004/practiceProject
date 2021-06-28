import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { actions } from '../actions/AuthAction';
import AuthInput from "./common/AuthInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled.div`
  padding: 10px;
`;

const PasswordResetting = () => {
    const [email, onChangeEmail] = useInput('');
    const { authCodeError } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onClickNext = useCallback(() => {
        dispatch(
            actions.authCodeRequest(
                email,
            )
        );
    }, [email]);


    return (
        <>
            <div>
                <FormWrapper>
                    <AuthInput text={"이메일"} type={"email"} value={email} onChange={onChangeEmail} errorMessage={authCodeError}/>
                    <ButtonWrapper>
                        <Button type="primary" onClick={onClickNext}>다음</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </div>
        </>
    );
};

export default PasswordResetting;