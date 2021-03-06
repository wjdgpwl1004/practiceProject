import React from 'react';
import MyPage from "../components/MyPage";
import wrapper from "../store/configureStore";
import axios from "axios";
import { actions } from "../actions/UserAction";
import { END } from "redux-saga";

const Profile = () => {

    return (
        <>
            <MyPage/>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({ req, res, ...etc }) => {
    const auth = req ? req.cookies['accessToken'] : '';
    if (req && auth) {
        axios.defaults.headers['Authorization'] = `Bearer ${auth}`;
    } else {
        axios.defaults.headers['Authorization'] = null;
    }
    store.dispatch(actions.getUserInfoRequest());
    store.dispatch(END);
    await (store as any).sagaTask.toPromise();
});

export default Profile;