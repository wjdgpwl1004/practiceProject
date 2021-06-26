import React, { useCallback } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import AppLayout from "../components/AppLayout";
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { AUTH_CODE_REQUEST } from "../reducers/auth";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  color: red;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const Home = () => {
    const [email, onChangeEmail] = useInput('');
    const { authCodeError } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback(() => {
        dispatch({
            type: AUTH_CODE_REQUEST,
            data: email,
        });
    }, [email]);

  return (
      <>
          <AppLayout>
            <div>
                <FormWrapper onFinish={onSubmitForm}>
                    <div>
                        <label htmlFor="user-email">이메일</label>
                        <br />
                        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
                    </div>
                    {authCodeError ? (<ErrorMessage>{authCodeError}</ErrorMessage>) : null}
                    <ButtonWrapper>
                        <Button type="primary" htmlType="submit">다음</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </div>
          </AppLayout>
      </>
  );
};

export default Home;