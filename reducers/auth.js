import produce from 'immer';

export const initialState = {
    authCodePending: false,
    authCodeError: null,
    userEmail: null,
    issueToken: null,
    remainMilisecond: null,
    authCodeVerificationError: null,
    authCodeConfirmToken: null,
};

export const AUTH_CODE_REQUEST = 'AUTH_CODE_REQUEST';
export const AUTH_CODE_SUCCESS = 'AUTH_CODE_SUCCESS';
export const AUTH_CODE_FAILURE = 'AUTH_CODE_FAILURE';

export const AUTH_CODE_VERIFICATION_REQUEST = 'AUTH_CODE_VERIFICATION_REQUEST';
export const AUTH_CODE_VERIFICATION_SUCCESS = 'AUTH_CODE_VERIFICATION_SUCCESS';
export const AUTH_CODE_VERIFICATION_FAILURE = 'AUTH_CODE_VERIFICATION_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case AUTH_CODE_REQUEST:
            draft.authCodePending = true;
            draft.authCodeError = null;
            draft.userEmail = action.data;
            draft.issueToken = null;
            draft.remainMilisecond = null;
            break;
        case AUTH_CODE_SUCCESS:
            draft.authCodePending = false;
            draft.authCodeError = null;
            draft.issueToken = action.data.issueToken;
            draft.remainMilisecond = action.data.remainMillisecond;
            break;
        case AUTH_CODE_FAILURE:
            draft.authCodePending = false;
            draft.authCodeError = action.error;
            draft.issueToken = null;
            draft.remainMilisecond = null;
            break;
        case AUTH_CODE_VERIFICATION_REQUEST:
            draft.authCodeVerificationError = null;
            break;
        case AUTH_CODE_VERIFICATION_SUCCESS:
            draft.authCodeVerificationError = null;
            draft.authCodeConfirmToken = action.data.confirmToken;
            break;
        case AUTH_CODE_VERIFICATION_FAILURE:
            draft.authCodeVerificationError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;