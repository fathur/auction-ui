import {
    GET_PREFERENCES_PENDING, GET_PREFERENCES_SUCCESS, GET_PREFERENCES_ERROR,
    UPDATE_PREFERENCE_PENDING, UPDATE_PREFERENCE_SUCCESS, UPDATE_PREFERENCE_ERROR
} from '@/actions/preferences'

const preferencesInitialState = {
    pending: false,
    data: [],
    error: false
}

export function preferencesReducer(state = preferencesInitialState, action) {
    switch (action.type) {
        case GET_PREFERENCES_PENDING:
            return {
                pending: true,
                data: {},
                error: false
            };

        case GET_PREFERENCES_SUCCESS:
            return {
                pending: false,
                data: action.data,
                error: false
            };

        case GET_PREFERENCES_ERROR:
            return {
                pending: false,
                data: {},
                error: action.error
            };
    
        default:
            return state;
            break;
    }
}

export const getPreferences = state => state.preferences.data
export const getPreferencesPending = state => state.preferences.pending;
export const getPreferencesError = state => state.preferences.error;



const preferenceInitialState = {
    pending: false,
    data: {},
    error: false
}

export function preferenceReducer(state = preferenceInitialState, action) {
    switch (action.type) {
        case UPDATE_PREFERENCE_PENDING:
            return {
                pending: true,
                data: {},
                error: false
            };

        case UPDATE_PREFERENCE_SUCCESS:
            return {
                pending: false,
                data: action.data,
                error: false
            };

        case UPDATE_PREFERENCE_ERROR:
            return {
                pending: false,
                data: {},
                error: action.error
            };
    
        default:
            return state;
            break;
    }
}

export const getPreference = state => state.preference.data
export const getPreferencePending = state => state.preference.pending;
export const getPreferenceError = state => state.preference.error;
