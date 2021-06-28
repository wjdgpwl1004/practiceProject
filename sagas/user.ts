import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    GET_INFO_REQUEST,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from "../actions/UserAction";
import Router from 'next/router';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// 로그인
function logInAPI(data) {
    return axios.post(`/api/login`, data);
}

function* logIn(action) {
    try {
        const { data } = yield call(logInAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data
        });
        setToken(data.accessToken);
        Router.push('/profile');
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

// 회원정보 조회
function getInfoAPI() {
    return axios.get(`/api/user`);
}

function* getInfo() {
    try {
        const { data } = yield call(getInfoAPI);
        yield put({
            type: GET_INFO_SUCCESS,
            data
        });
    } catch (err) {
        yield put({
            type: GET_INFO_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

// 로그아웃
function logOutAPI() {
    return axios.post(`/api/logout`, {}, {
        headers: {
            Authorization: `Bearer ${getTokenFormCookie()}`
        }
    });
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
        removeToken();
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

function getTokenFormCookie() {
    return cookies.get('accessToken');
}

function setToken(accessToken) {
    cookies.set('accessToken', accessToken, { path: '/'});
}

function removeToken() {
    cookies.remove('accessToken');
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchGetInfo() {
    yield takeLatest(GET_INFO_REQUEST, getInfo);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchGetInfo),
        fork(watchLogOut),
    ]);
}