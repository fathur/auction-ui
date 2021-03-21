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

export function getItemPending() {
    return {
        type: GET_ITEMS_PENDING
    }
}

export function getItemSuccess(item) {
    return {
        type: GET_ITEMS_SUCCESS,
        items: item
    }
}

export function getItemError(error) {
    return {
        type: GET_ITEMS_ERROR,
        error: error
    }
}