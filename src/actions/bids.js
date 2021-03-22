export const POST_BID_PENDING = 'POST_BID_PENDING';
export const POST_BID_SUCCESS = 'POST_BID_SUCCESS';
export const POST_BID_ERROR = 'POST_BID_ERROR';

export function postBidPending() {
    return {
        type: POST_BID_PENDING
    }
}

export function postBidSuccess(data) {
    return {
        type: POST_BID_SUCCESS,
        data
    }
}

export function postBidError(error) {
    return {
        type: POST_BID_ERROR,
        error: error
    }
}