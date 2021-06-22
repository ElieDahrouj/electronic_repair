const totalPrice = (state= 0, action) =>{
    switch (action.type)
    {
        case 'INCREMENT':
            console.log('state'+state)
            return Math.round((state += parseFloat(action.payload)) * 100)/100
        case 'DECREMENT':
            return state -= action.payload.price
    }
    return state
}

export default totalPrice