const cartItems = (state= [], action) =>{
    switch (action.type)
    {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.uid !== action.payload)
    }
    return state
}

export default cartItems
