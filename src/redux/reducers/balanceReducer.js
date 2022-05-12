const PAY = "PAY";

const initialState = {
    balance:10200,
}

const balanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case PAY:
            return {
                ...state,
                balance:state.balance - action.balance
            }
        default:
            return state
    }
}

export default balanceReducer;