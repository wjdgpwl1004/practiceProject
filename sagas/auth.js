import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
    AUTH_CODE_FAILURE,
    AUTH_CODE_REQUEST,
    AUTH_CODE_SUCCESS,
    AUTH_CODE_VERIFICATION_FAILURE,
    AUTH_CODE_VERIFICATION_REQUEST,
    AUTH_CODE_VERIFICATION_SUCCESS,
    PASSWORD_CHANGE_FAILURE,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
} from '../actions/AuthAction';
import Router from 'next/router';

// 인증 코드 발급 요청
function authCodeIssuanceAPI(data) {
    return axios.get(`/api/reset-password?email=${data}`);
}

function* authCodeIssuance(action) {
    try {
        const { data } = yield call(authCodeIssuanceAPI, action.data);
        yield put({
            type: AUTH_CODE_SUCCESS,
            data
        });
        Router.push('/verification');
    } catch (err) {
        console.log(err);
        yield put({
            type: AUTH_CODE_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

// 인증코드 검증
function authCodeVerificationAPI(data) {
    return axios.post('/api/reset-password', data);
}

function* authCodeVerification(action) {
    try {
        const { data } = yield call(authCodeVerificationAPI, action.data);
        yield put({
            type: AUTH_CODE_VERIFICATION_SUCCESS,
            data
        });
        Router.push('/changePassword');
    } catch (err) {
        yield put({
            type: AUTH_CODE_VERIFICATION_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

function passwordChangeAPI(data) {
    return axios.patch('/api/reset-password', data);
}

function* passwordChange(action) {
    try {
        const { data } = yield call(passwordChangeAPI, action.data);
        yield put({
            type: PASSWORD_CHANGE_SUCCESS,
            data
        });
        alert('성공했다. 두둥탁');
        Router.push('/');
    } catch (err) {
        yield put({
            type: PASSWORD_CHANGE_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

function* watchAuthCodeIssuance() {
    yield takeLatest(AUTH_CODE_REQUEST, authCodeIssuance);
}

function* watchAuthCodeVerification() {
    yield takeLatest(AUTH_CODE_VERIFICATION_REQUEST, authCodeVerification);
}

function* watchPasswordChange() {
    yield takeLatest(PASSWORD_CHANGE_REQUEST, passwordChange);
}

export default function* userSaga() {
    yield all([
        fork(watchAuthCodeIssuance),
        fork(watchAuthCodeVerification),
        fork(watchPasswordChange),
    ]);
}