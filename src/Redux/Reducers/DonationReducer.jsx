const initState = {
    status: []
};

const DonationReducers = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_DONATION':
            return{
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}
export default DonationReducers;