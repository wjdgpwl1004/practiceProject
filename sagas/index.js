import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import authSaga from './auth';

axios.defaults.baseURL = 'https://ably-frontend-interview-server.vercel.app';
axios.defaults.headers.common['content-type'] = 'application/json';

export default function* rootSaga() {
    yield all([
        fork(authSaga),
    ]);
}