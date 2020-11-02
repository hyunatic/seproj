const initState = {
    status: [],
    registerstatus: [],
    updatestatus: []
};

const AuthReducers = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_CHECK':
            return {
                ...state,
                status: action.payload
            }
        case 'REGISTER_USER':
            return {
                ...state,
                registerstatus: action.payload
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                updatestatus: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducers;