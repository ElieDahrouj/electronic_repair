const totalPrice = (state= 0, action) =>{
    switch (action.type)
    {
        case 'INCREMENT':
            return Math.round((state += parseFloat(action.payload)) * 100)/100
        case 'DECREMENT':
            return Math.round((state -= parseFloat(action.payload)) * 100)/100
    }
    return state
}

export default totalPrice
