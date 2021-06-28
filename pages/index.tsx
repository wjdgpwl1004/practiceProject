import React from 'react';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import { actions } from '../actions/UserAction';
import axios from 'axios';

const Home = () => {

  return (
      <>
            메인 화면 입니다.
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
    store.dispatch(actions.getInfoRequest());
    store.dispatch(END);
    await (store as any).sagaTask.toPromise();
});

export default Home;