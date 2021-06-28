import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from "../actions/UserAction";
import Router from 'next/router';
import Cookies from 'universal-cookie';
import { GetUserInfoResponse, LogInResponse, LogOutResponse } from "./types";

const cookies = new Cookies();

// 로그인
function logInAPI(data) {
    return axios.post<{ data: LogInResponse }>(`/api/login`, data);
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
function getUserInfoAPI() {
    return axios.get<{ data: GetUserInfoResponse }>(`/api/user`);
}

function* getUserInfo() {
    try {
        const { data } = yield call(getUserInfoAPI);
        yield put({
            type: GET_USER_INFO_SUCCESS,
            data
        });
    } catch (err) {
        yield put({
            type: GET_USER_INFO_FAILURE,
            error: err.response.data.error.message,
        });
    }
}

// 로그아웃
function logOutAPI() {
    return axios.post<{ data: LogOutResponse }>(`/api/logout`, {}, {
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

function* watchGetUserInfo() {
    yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchGetUserInfo),
        fork(watchLogOut),
    ]);
}