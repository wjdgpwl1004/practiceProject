import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import authSaga from './auth';
import userSaga from './user';

axios.defaults.baseURL = 'https://ably-frontend-interview-server.vercel.app';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(userSaga),
    ]);
}