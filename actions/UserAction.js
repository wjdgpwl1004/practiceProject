export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAILURE = 'GET_INFO_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const loginRequest = (email, password) => {
    return {
        type: LOG_IN_REQUEST,
        data: {
            email,
            password
        },
    };
};

const getInfoRequest = () => {
    return {
        type: GET_INFO_REQUEST,
    };
}

const logOutRequest = () => {
    return {
        type: LOG_OUT_REQUEST,
    };
}

export const actions = {
    loginRequest,
    getInfoRequest,
    logOutRequest,
};