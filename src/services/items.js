import axios from 'axios'
import _ from 'lodash'

import {
    getItemsPending, getItemsSuccess, getItemsError,
    getItemPending, getItemSuccess, getItemError
} from '@/actions/items'

import { apiUrl, jwtToken } from '@/helper'

export function callGetItems(params = {}) {

    return dispatch => {
        dispatch(getItemsPending());

        // let page

        // if (_.has(params, 'page')) {
        //     page = params.page
        // }

        axios.get(apiUrl('/items'), {
            params: {
                page: params.page || 1,
                q: params.q || ''
            }
        })
            .then(response => {
                dispatch(getItemsSuccess(response.data.data, response.data.meta.pagination));
            })
            .catch(error => {
                dispatch(getItemsError(error.response.data.data))
            })
    }
}

export function callGetItem(id) {
    
    return dispatch => {

        dispatch(getItemPending());

        axios.get(apiUrl(`/items/${id}`), {
            headers: {
                'Authorization': `Bearer ${jwtToken()}`
            }
        })
            .then(response => {
                dispatch(getItemSuccess(response.data.data));
            })
            .catch(error => {
                dispatch(getItemError(error.response.data.data))
            })
    }
}