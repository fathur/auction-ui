import axios from 'axios'

import { apiUrl } from '@/helper'

import {
    postLoginPending, postLoginSuccess, postLoginError,
    deleteLogoutPending, deleteLogoutSuccess, deleteLogoutError
} from '@/actions/auth'
import { jwtToken } from '@/helper'

export function callPostLogin(username, password) {

    return dispatch => {

        dispatch(postLoginPending());

        axios.post(apiUrl('login'), {username, password})
            .then(response => {
                dispatch(postLoginSuccess(response.data.data))
            })
            .catch(error => {
                dispatch(postLoginError(error.response.data.data))
            })
    }
}

export function callDeleteLogout() {

    return dispatch => {

        dispatch(deleteLogoutPending());

        axios.delete(apiUrl('logout'), {
            headers: {
                'Authorization': `Bearer ${jwtToken()}`
            }
        })
            .then(response => {
                dispatch(deleteLogoutSuccess(jwtToken()))
            })
            .catch(error => {
                dispatch(deleteLogoutError(error.response.data.data))
            })
    }
}