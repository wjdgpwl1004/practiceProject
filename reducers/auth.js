import produce from 'immer';

export const initialState = {
    authCodeError: null,
};

export const AUTH_CODE_REQUEST = 'AUTH_CODE_REQUEST';
export const AUTH_CODE_SUCCESS = 'AUTH_CODE_SUCCESS';
export const AUTH_CODE_FAILURE = 'AUTH_CODE_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case AUTH_CODE_REQUEST:
            draft.authCodeError = null;
            break;
        case AUTH_CODE_FAILURE:
            draft.authCodeError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;