import {getItemsPending, getItemsSuccess, getItemsError} from '@/actions/items'
import axios from 'axios'
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

                dispatch(getItemsSuccess());

                return response.data;
            })
            .catch(error => {
                dispatch(getItemsError())
            })
    }
}

export function callGetItem(id) {
    return dispatch => {
        dispatch(getItemsPending());

        axios.get('https://exampleapi.com/products')
            .then(response => response.json())
            .then(response => {

                if(response.error) {
                    throw(response.error)
                }

                dispatch(getItemsSuccess());

                return response.data;
            })
            .catch(error => {
                dispatch(getItemsError())
            })
    }
}