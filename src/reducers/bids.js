import {
    POST_BID_PENDING,
    POST_BID_SUCCESS,
    POST_BID_ERROR,

} from '@/actions/bids'


const initialState = {
    pending: false,
    data: {},
    error: null,
}

export function bidReducer(state = initialState, action) {
    switch (action.type) {
        case POST_BID_PENDING:
            return {
                pending: true,
                error: null,
                data: {}
            };

        case POST_BID_SUCCESS:
            return {
                pending: false,
                data: action.data,
                error: null
            };

        case POST_BID_ERROR:
            return {
                data: {},
                pending: false,
                error: action.error
            };
    
        default:
            return state;
            break;
    }
}

export const getBid = state => state.bid.data
export const getBidPending = state => state.bid.pending;
export const getBidError = state => state.bid.error;
