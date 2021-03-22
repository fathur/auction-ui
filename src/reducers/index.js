import { combineReducers } from 'redux'

import { itemsReducer, itemReducer } from '@/reducers/items'
import { bidReducer } from '@/reducers/bids'
import { authReducer } from '@/reducers/auth'
import { profileReducer } from '@/reducers/users'

export default combineReducers({
    items: itemsReducer,
    item: itemReducer,
    auth: authReducer,
    profile: profileReducer,
    bid: bidReducer
})