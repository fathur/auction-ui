export const GET_PREFERENCES_PENDING = 'GET_PREFERENCES_PENDING';
export const GET_PREFERENCES_SUCCESS = 'GET_PREFERENCES_SUCCESS';
export const GET_PREFERENCES_ERROR = 'GET_PREFERENCES_ERROR';

export const UPDATE_PREFERENCE_PENDING = 'UPDATE_PREFERENCE_PENDING';
export const UPDATE_PREFERENCE_SUCCESS = 'UPDATE_PREFERENCE_SUCCESS';
export const UPDATE_PREFERENCE_ERROR = 'UPDATE_PREFERENCE_ERROR';

export function getPreferencesPending() {
    return {
        type: GET_PREFERENCES_PENDING
    }
}

export function getPreferencesSuccess(data) {
    return {
        type: GET_PREFERENCES_SUCCESS,
        data
    }
}

export function getPreferencesError(error) {
    return {
        type: GET_PREFERENCES_ERROR,
        error
    }
}

export function updatePreferencePending() {
    return {
        type: UPDATE_PREFERENCE_PENDING
    }
}

export function updatePreferenceSuccess(data) {
    return {
        type: UPDATE_PREFERENCE_SUCCESS,
        data
    }
}

export function updatePreferenceError(error) {
    return {
        type: UPDATE_PREFERENCE_ERROR,
        error
    }
}