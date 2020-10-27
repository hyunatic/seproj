const initState = {
    status: [],
    donationpost: []
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
        default:
            return state;
    }
}
export default DonationReducers;