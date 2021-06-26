export const AUTH_CODE_REQUEST = 'AUTH_CODE_REQUEST';
export const AUTH_CODE_SUCCESS = 'AUTH_CODE_SUCCESS';
export const AUTH_CODE_FAILURE = 'AUTH_CODE_FAILURE';

export const AUTH_CODE_VERIFICATION_REQUEST = 'AUTH_CODE_VERIFICATION_REQUEST';
export const AUTH_CODE_VERIFICATION_SUCCESS = 'AUTH_CODE_VERIFICATION_SUCCESS';
export const AUTH_CODE_VERIFICATION_FAILURE = 'AUTH_CODE_VERIFICATION_FAILURE';

export const PASSWORD_CHANGE_REQUEST = 'PASSWORD_CHANGE_REQUEST';
export const PASSWORD_CHANGE_SUCCESS = 'PASSWORD_CHANGE_SUCCESS';
export const PASSWORD_CHANGE_FAILURE = 'PASSWORD_CHANGE_FAILURE';

const passwordChange = (email, confirmToken, newPassword, newPasswordConfirm) => {
    return {
        type: PASSWORD_CHANGE_REQUEST,
        data: {
            email,
            confirmToken,
            newPassword,
            newPasswordConfirm,
        },
    };
};

export const actions = {
    passwordChange
};
