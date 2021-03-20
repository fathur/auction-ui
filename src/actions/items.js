export const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export function getItemsPending() {
    return {
        type: GET_ITEMS_PENDING
    }
}

export function getItemsSuccess(items) {
    return {
        type: GET_ITEMS_SUCCESS,
        items: items
    }
}

export function getItemsError(error) {
    return {
        type: GET_ITEMS_ERROR,
        error: error
    }
}