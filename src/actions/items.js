export const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export const GET_ITEM_PENDING = 'GET_ITEM_PENDING';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_ERROR = 'GET_ITEM_ERROR';

export function getItemsPending() {
    return {
        type: GET_ITEMS_PENDING
    }
}

export function getItemsSuccess(data, pagination) {
    return {
        type: GET_ITEMS_SUCCESS,
        data,
        pagination
    }
}

export function getItemsError(error) {
    return {
        type: GET_ITEMS_ERROR,
        error: error
    }
}

export function getItemPending() {
    return {
        type: GET_ITEM_PENDING
    }
}

export function getItemSuccess(data) {
    return {
        type: GET_ITEM_SUCCESS,
        data
    }
}

export function getItemError(error) {
    return {
        type: GET_ITEM_ERROR,
        error: error
    }
}