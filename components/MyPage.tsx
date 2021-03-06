import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Card } from "antd";
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/UserAction";

const MyPageWrapper = styled.div`
  padding: 10px;
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const MyPage = () => {
    const { Meta } = Card;

    const { getUserInfoError, name, email, profileImage, logOutError } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!email) {
            Router.push('/');
        }
    }, [email]);

    useEffect(() => {
        if(getUserInfoError) {
            Router.push('/');
        }
    }, [getUserInfoError]);

    useEffect(() => {
        if(logOutError) {
            alert(logOutError);
        }
    }, [logOutError]);

    const onSubmitLogOut = () => {
        dispatch(actions.logOutRequest());
    };

    return (
        <MyPageWrapper>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="me" src={profileImage} />}
            >
                <Meta title={name} description={email} />
            </Card>
            <ButtonWrapper>
                <Button type="primary" onClick={onSubmitLogOut}>๋ก๊ทธ์์</Button>
            </ButtonWrapper>
        </MyPageWrapper>
    );
};

export default MyPage;