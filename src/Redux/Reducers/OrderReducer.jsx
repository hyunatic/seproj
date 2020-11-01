const initState = {
    status: [],
    orderlist: []
};

const OrderReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ORDER':
            return {
                ...state,
                status: action.payload
            }
        case 'VIEW_USER_ORDER':
            return {
                ...state,
                orderlist: action.payload
            }
        case 'DELETE_USER_ORDER':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}
export default OrderReducers;