import Cookies from 'universal-cookie';
import Router from 'next/router'

import {
    POST_LOGIN_PENDING,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_ERROR,
    DELETE_LOGOUT_PENDING,
    DELETE_LOGOUT_SUCCESS,
    DELETE_LOGOUT_ERROR
} from '@/actions/auth'

import { setLoginCookie, clearLoginCookie } from '@/helper'

const initialState = {
    pending: false,
    data: {},
    error: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case POST_LOGIN_PENDING:
            return {
                pending: true,
                data: {},
                error: null
            }
            break;
    

        case POST_LOGIN_SUCCESS:

            setLoginCookie(action.data.token)

            Router.push('/')

            return {
                pending: false,
                data: action.data,
                error: false

            }
            break;

        case POST_LOGIN_ERROR:
            return {
                pending: false,
                error: action.error,
                data: {}
            }
            break;

        case DELETE_LOGOUT_PENDING:
            return {
                pending: true,
            }
            break;
    
        case DELETE_LOGOUT_SUCCESS:

            clearLoginCookie(action.data.token)

            Router.reload()

            return {
                pending: false,
                data: {},
                error: false

            }
            break;

        case DELETE_LOGOUT_ERROR:
            return {
                pending: false,
                error: action.error
            }
            break;

        default:
            return state;
            break;
    }
}

export const getAuth = state => state.auth.data
export const getAuthPending = state => state.auth.pending;
export const getAuthError = state => state.auth.error;
