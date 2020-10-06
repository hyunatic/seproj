const initState = {
    status: []
};

const AuthReducers = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_CHECK':
            return{
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducers;