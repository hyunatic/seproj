const initState = {
    status: [],
    registerstatus:[]
};

const AuthReducers = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_CHECK':
            return{
                ...state,
                status: action.payload
            }
        case 'REGISTER_USER':
            return{
                ...state,
                registerstatus: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducers;