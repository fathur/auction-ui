import {
    GET_PROFILE_PENDING,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR
} from '@/actions/users'

const initialState = {
    pending: false,
    data: {},
    error: false
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_PENDING:
            return {
                pending: true,
                data: {},
                error: false
            };

        case GET_PROFILE_SUCCESS:
            return {
                pending: false,
                data: action.data,
                error: false
            };

        case GET_PROFILE_ERROR:
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

export const getProfile = state => state.profile.data
export const getProfilePending = state => state.profile.pending;
export const getProfileError = state => state.profile.error;
