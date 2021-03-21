import axios from 'axios'

import {
    getItemsPending, getItemsSuccess, getItemsError,
    getItemPending, getItemSuccess, getItemError
} from '@/actions/items'

import { apiUrl } from '@/helper'

export function callGetItems() {

    return dispatch => {
        dispatch(getItemsPending());

        axios.get(apiUrl('/items'))
            .then(response => response.json())
            .then(response => {

                if(response.error) {
                    throw(response.error)
                }

                dispatch(getItemsSuccess(response.data));

                return response.data;
            })
            .catch(error => {
                dispatch(getItemsError(error))
            })
    }
}

export function callGetItem(id) {
    return dispatch => {
        dispatch(getItemPending());

        axios.get(apiUrl(`/items/${id}`))
            .then(response => response.json())
            .then(response => {

                if(response.error) {
                    throw(response.error)
                }

                dispatch(getItemSuccess());

                return response.data;
            })
            .catch(error => {
                dispatch(getItemError())
            })
    }
}