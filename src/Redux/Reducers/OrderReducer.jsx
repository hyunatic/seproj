const initState = {
    status: [],
    orderlist: [],
    approvallist: [],
    delstatus: [],
    approvalstatus: []
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
                delstatus: action.payload
            }
        case 'VIEW_APPROVAL':
            return {
                ...state,
                approvallist: action.payload
            }
        case 'APPROVE_ORDER':
            return {
                ...state,
                approvalstatus: action.payload
            }
        default:
            return state;
    }
}
export default OrderReducers;