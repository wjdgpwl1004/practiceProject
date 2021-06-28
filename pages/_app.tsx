import React from 'react';
import { AppProps } from "next/app";
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
import GlobalStyle from "../styles/GlobalStyle";
import AppLayout from "../components/AppLayout";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Practice Project</title>
            </Head>
            <GlobalStyle/>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </>
    );
};

export default wrapper.withRedux(App);