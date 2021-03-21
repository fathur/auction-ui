import axios from 'axios'

import { apiUrl } from '@/helper'

import {
    getProfilePending, getProfileSuccess, getProfileError
} from '@/actions/users'

import { jwtToken } from '@/helper'

export function callGetProfile() {

    return dispatch => {

        dispatch(getProfilePending());

        axios.get(apiUrl('users/profile'), {
            headers: {
                'Authorization': `Bearer ${jwtToken()}`
            }
        })
            .then(response => {
                dispatch(getProfileSuccess(response.data.data))
            })
            .catch(error => {
                dispatch(getProfileError(error.response.data.data))
            })
    }
}