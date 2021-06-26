import React from 'react';
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import Router from 'next/router';

const AppLayout = ({ children }) => {

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>Home</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={8}>
                    login
                </Col>
                <Col xs={24} md={16}>
                    {children}
                </Col>
            </Row>
        </div>
    );
};

export default AppLayout;