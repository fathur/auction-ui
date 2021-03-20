import {
    GET_ITEMS_PENDING,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR
} from '@/actions/items'

const initialState = {
    pending: false,
    items: [],
    error: null
}

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS_PENDING:
            return {
                ...state,
                pending: true
            };

        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                pending: false,
                items: action.payload
            };

        case GET_ITEMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
    
        default:
            return state;
            break;
    }
}

export const getItems = state => {

    // if(state !== undefined) {
        return state.items.items;
    // }
    // state.items
};
export const getItemsPending = state => state.items.pending;
export const getItemsError = state => state.items.error;
