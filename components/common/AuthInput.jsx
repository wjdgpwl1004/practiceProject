import React from 'react';
import styled from 'styled-components';
import { Input } from "antd";

const AuthInputWrapper = styled.div`
  margin: 5px 0;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  color: red;
`;

const AuthInput = ({
    text,
    type,
    value,
    onChange,
    errorMessage,
}) => {

    return (
        <AuthInputWrapper>
            <div>
                <label htmlFor="auth-input">{text}</label>
                <br />
                <Input name="auth-input" type={type} value={value} onChange={onChange} required />
            </div>


            {errorMessage ? (<ErrorMessage>{errorMessage}</ErrorMessage>) : null}
        </AuthInputWrapper>
    );
};

export default React.memo(AuthInput);