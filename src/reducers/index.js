import { combineReducers } from 'redux'

import itemsReducer from '@/reducers/items'
import { authReducer } from '@/reducers/auth'
import { profileReducer } from '@/reducers/users'

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    profile: profileReducer
})