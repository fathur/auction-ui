import axios from 'axios'
import _ from 'lodash'

import {
    postBidPending, postBidSuccess, postBidError,
} from '@/actions/bids'

import { apiUrl, jwtToken } from '@/helper'

export function postBid(id, params = {}) {

    return dispatch => {

        dispatch(postBidPending());

        axios.post(apiUrl(`/items/${id}/bids`), params, {
            headers: {
                'Authorization': `Bearer ${jwtToken()}`
            }
        })
            .then(response => {
                dispatch(postBidSuccess(response.data.data));
            })
            .catch(error => {
                dispatch(postBidError(error.response.data.data))
            })
    }
}
