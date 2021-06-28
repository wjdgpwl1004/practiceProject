import React from 'react';
import styled from 'styled-components';
import { Button } from "antd";
import Router from 'next/router';

const ProfileWrapper = styled.div`
  padding: 10px;
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const UserProfile = () => {

    const onMovePage = () => {
        Router.push('/resetPassword');
    };

    return (
        <ProfileWrapper>
            환영합니다.
            <ButtonWrapper>
                <Button type="primary" onClick={onMovePage}>비밀번호 재설정</Button>
            </ButtonWrapper>
        </ProfileWrapper>
    );
};

export default UserProfile;