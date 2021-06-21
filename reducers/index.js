import { combineReducers } from 'redux'
import cartItems from '../reducers/cartItems'
import totalPrice from '../reducers/totalPrice'

export default combineReducers({
    cartItems,
    totalPrice
})
