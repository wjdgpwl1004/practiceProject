import React from 'react';
import AppLayout from "../components/AppLayout";
import AuthCodeVerification from "../components/AuthCodeVerification";

const Verification = () => {

    return (
        <>
            <AppLayout>
                <AuthCodeVerification/>
            </AppLayout>
        </>
    );
};

export default Verification;