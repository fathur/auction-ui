export const POST_LOGIN_PENDING = 'POST_LOGIN_PENDING';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';

export const DELETE_LOGOUT_PENDING = 'DELETE_LOGOUT_PENDING';
export const DELETE_LOGOUT_SUCCESS = 'DELETE_LOGOUT_SUCCESS';
export const DELETE_LOGOUT_ERROR = 'DELETE_LOGOUT_ERROR';

export function postLoginPending() {
    return {
        type: POST_LOGIN_PENDING
    }
}

export function postLoginSuccess(data) {
    return {
        type: POST_LOGIN_SUCCESS,
        data
    }
}

export function postLoginError(error) {
    return {
        type: POST_LOGIN_ERROR,
        error
    }
}

export function deleteLogoutPending() {
    return {
        type: DELETE_LOGOUT_PENDING
    }
}

export function deleteLogoutSuccess(data) {
    return {
        type: DELETE_LOGOUT_SUCCESS,
        data
    }
}

export function deleteLogoutError(error) {
    return {
        type: DELETE_LOGOUT_ERROR,
        error
    }
}