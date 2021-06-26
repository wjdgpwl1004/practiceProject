import React, { useCallback } from 'react';
import styled from 'styled-components';
import AppLayout from "../components/AppLayout";
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { actions } from '../actions/AuthAction';

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

const Home = () => {
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
          <AppLayout>
            <div>
                <FormWrapper>
                    <div>
                        <label htmlFor="user-email">이메일</label>
                        <br />
                        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
                    </div>
                    {authCodeError ? (<ErrorMessage>{authCodeError}</ErrorMessage>) : null}
                    <ButtonWrapper>
                        <Button type="primary" onClick={onClickNext}>다음</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </div>
          </AppLayout>
      </>
  );
};

export default Home;