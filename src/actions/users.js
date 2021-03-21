export const GET_PROFILE_PENDING = 'GET_PROFILE_PENDING';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

export function getProfilePending() {
    return {
        type: GET_PROFILE_PENDING
    }
}

export function getProfileSuccess(data) {
    return {
        type: GET_PROFILE_SUCCESS,
        data
    }
}

export function getProfileError(error) {
    return {
        type: GET_PROFILE_ERROR,
        error
    }
}