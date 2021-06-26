import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    AUTH_CODE_REQUEST,
    AUTH_CODE_SUCCESS,
    AUTH_CODE_FAILURE,
} from '../reducers/auth';

function authCodeIssuanceAPI(data) {
    return axios.get(`/api/reset-password?email=${data}`);
}

function* authCodeIssuance(action) {
    try {
        const result = yield call(authCodeIssuanceAPI, action.data);
        console.log(result);
        yield put({
            type: AUTH_CODE_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: AUTH_CODE_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

function* watchAuthCodeIssuance() {
    yield takeLatest(AUTH_CODE_REQUEST, authCodeIssuance);
}

export default function* userSaga() {
    yield all([
        fork(watchAuthCodeIssuance),
    ]);
}