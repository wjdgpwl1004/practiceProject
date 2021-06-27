import produce from 'immer';
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

export const initialState = {
    loginError: null,
    accessToken: null,
    name: null,
    email: null,
    profileImage: null,
    getInfoError: null,
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
        case GET_INFO_REQUEST:
            draft.getInfoError = null;
            break;
        case GET_INFO_SUCCESS:
            draft.getInfoError = null;
            draft.name = action.data.name;
            draft.email = action.data.email;
            draft.profileImage = action.data.profileImage;
            break;
        case GET_INFO_FAILURE:
            draft.getInfoError = action.error;
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