import produce from 'immer';
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

type UserState = {
    loginError: null | string,
    accessToken: null | string,
    name: null | string,
    email: null | string,
    profileImage: null | string,
    getUserInfoError: null | string,
    logOutError: null | string,
};

export const initialState: UserState = {
    loginError: null,
    accessToken: null,
    name: null,
    email: null,
    profileImage: null,
    getUserInfoError: null,
    logOutError: null,
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            draft.loginError = null;
            break;
        case LOG_IN_SUCCESS:
            draft.loginError = null;
            draft.accessToken = action.data.accessToken;
            break;
        case LOG_IN_FAILURE:
            draft.loginError = action.error;
            break;
        case GET_USER_INFO_REQUEST:
            draft.getUserInfoError = null;
            break;
        case GET_USER_INFO_SUCCESS:
            draft.getUserInfoError = null;
            draft.name = action.data.name;
            draft.email = action.data.email;
            draft.profileImage = action.data.profileImage;
            break;
        case GET_USER_INFO_FAILURE:
            draft.getUserInfoError = action.error;
            break;
        case LOG_OUT_REQUEST:
            draft.logOutError = null;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutError = null;
            draft.name = null;
            draft.email = null;
            draft.profileImage = null;
            draft.accessToken = null;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;