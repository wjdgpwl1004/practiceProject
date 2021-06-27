import React from 'react';
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";

const AppLayout = ({ children }) => {
    const { email } = useSelector((state) => state.user);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>Home</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={8}>
                    {email ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={16}>
                    {children}
                </Col>
            </Row>
        </div>
    );
};

export default AppLayout;