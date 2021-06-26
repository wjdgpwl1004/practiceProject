import produce from 'immer';
import {
    AUTH_CODE_FAILURE,
    AUTH_CODE_REQUEST,
    AUTH_CODE_SUCCESS,
    AUTH_CODE_VERIFICATION_FAILURE,
    AUTH_CODE_VERIFICATION_REQUEST,
    AUTH_CODE_VERIFICATION_SUCCESS,
    PASSWORD_CHANGE_FAILURE,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS
} from "../actions/AuthAction";

export const initialState = {
    authCodePending: false,
    authCodeError: null,
    userEmail: null,
    issueToken: null,
    remainMilisecond: null,
    authCodeVerificationError: null,
    authCodeConfirmToken: null,
    passwordChangeError: null,
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case AUTH_CODE_REQUEST:
            draft.authCodePending = true;
            draft.authCodeError = null;
            draft.userEmail = action.data;
            draft.issueToken = null;
            draft.remainMilisecond = null;
            draft.authCodeConfirmToken = null;
            break;
        case AUTH_CODE_SUCCESS:
            draft.authCodePending = false;
            draft.authCodeError = null;
            draft.issueToken = action.data.issueToken;
            draft.remainMilisecond = action.data.remainMillisecond;
            draft.authCodeConfirmToken = null;
            break;
        case AUTH_CODE_FAILURE:
            draft.authCodePending = false;
            draft.authCodeError = action.error;
            draft.issueToken = null;
            draft.remainMilisecond = null;
            draft.authCodeConfirmToken = null;
            break;
        case AUTH_CODE_VERIFICATION_REQUEST:
            draft.authCodeVerificationError = null;
            draft.authCodeConfirmToken = null;
            break;
        case AUTH_CODE_VERIFICATION_SUCCESS:
            draft.authCodeVerificationError = null;
            draft.authCodeConfirmToken = action.data.confirmToken;
            break;
        case AUTH_CODE_VERIFICATION_FAILURE:
            draft.authCodeVerificationError = action.error;
            draft.authCodeConfirmToken = null;
            break;
        case PASSWORD_CHANGE_REQUEST:
            draft.passwordChangeError = null;
        case PASSWORD_CHANGE_SUCCESS:
            draft.passwordChangeError = null;
        case PASSWORD_CHANGE_FAILURE:
            draft.passwordChangeError = action.error;
        default:
            break;
    }
});

export default reducer;