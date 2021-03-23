import axios from 'axios'

import { apiUrl } from '@/helper'

import {
    getPreferencesPending, getPreferencesSuccess, getPreferencesError,
    updatePreferencePending, updatePreferenceSuccess, updatePreferenceError
} from '@/actions/preferences'

import { jwtToken } from '@/helper'

export function callGetPreferences() {

    return dispatch => {

        dispatch(getPreferencesPending());

        axios.get(apiUrl('preferences'), {
            headers: {
                'Authorization': `Bearer ${jwtToken()}`
            }
        })
            .then(response => {
                dispatch(getPreferencesSuccess(response.data.data))
            })
            .catch(error => {
                dispatch(getPreferencesError(error.response.data.data))
            })
    }
}

export function callPutPreference(id, params = {}) {

    return dispatch => {

        dispatch(updatePreferencePending());

        axios.put(apiUrl(`preferences/${id}`), params, {
            headers: {
                'Authorization': `Bearer ${jwtToken()}`
            }
        })
            .then(response => {
                dispatch(updatePreferenceSuccess(response.data.data))
            })
            .catch(error => {
                dispatch(updatePreferenceError(error.response.data.data))
            })
    }
}