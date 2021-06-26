import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import AppLayout from "../components/AppLayout";
import { Form, Input, Button } from 'antd';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const Home = () => {
  return (
      <>
          <AppLayout>
            <div>
                <FormWrapper>
                    <div>
                        <label htmlFor="user-email">이메일</label>
                        <br />
                        <Input name="user-email" type="email" value={'aa@email.com'} required />
                    </div>
                    <ButtonWrapper>
                        <Button type="primary">다음</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </div>
          </AppLayout>
      </>
  );
};

export default Home;