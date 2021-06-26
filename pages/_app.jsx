import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';
import GlobalStyle from "../styles/GlobalStyle";

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Practice Project</title>
            </Head>
            <GlobalStyle/>
            <Component />
        </>
    );
};

export default wrapper.withRedux(App);