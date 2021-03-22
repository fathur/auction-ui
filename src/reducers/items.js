import {
    GET_ITEMS_PENDING,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,

    GET_ITEM_PENDING,
    GET_ITEM_SUCCESS,
    GET_ITEM_ERROR

} from '@/actions/items'

const initialStateItems = {
    pending: false,
    data: [],
    pagination: {},
    error: null,
}

export function itemsReducer(state = initialStateItems, action) {
    switch (action.type) {
        case GET_ITEMS_PENDING:
            return {
                pending: true,
                error: null
            };

        case GET_ITEMS_SUCCESS:
            return {
                pending: false,
                data: action.data,
                pagination: action.pagination,
                error: null
            };

        case GET_ITEMS_ERROR:
            return {
                data: [],
                pending: false,
                error: action.error
            };
    
        default:
            return state;
            break;
    }
}

export const getItems = state => {
    state.bid.error = null

    return state.items.data
}
export const getItemsPagination = state => state.items.pagination
export const getItemsPending = state => state.items.pending;
export const getItemsError = state => state.items.error;

const initialStateItem = {
    pending: false,
    data: {},
    error: null,
}

export function itemReducer(state = initialStateItem, action) {
    switch (action.type) {
        case GET_ITEM_PENDING:
            return {
                pending: true,
                error: null
            };

        case GET_ITEM_SUCCESS:
            return {
                pending: false,
                data: action.data,
                error: null
            };

        case GET_ITEM_ERROR:
            return {
                data: [],
                pending: false,
                error: action.error
            };
    
        default:
            return state;
            break;
    }
}

export const getItem = state => state.item.data
export const getItemPending = state => state.item.pending;
export const getItemError = state => state.item.error;