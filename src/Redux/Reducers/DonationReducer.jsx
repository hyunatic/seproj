const initState = {
    status: [],
    donationpost: [],
    userdonation: []
};

const DonationReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DONATION':
            return {
                ...state,
                status: action.payload
            }
        case 'RETRIEVE_DONATION':
            return {
                ...state,
                donationpost: action.payload
            }
        case 'RETRIEVE_USER_DONATION':
            return {
                ...state,
                userdonation: action.payload
            }
        default:
            return state;
    }
}
export default DonationReducers;