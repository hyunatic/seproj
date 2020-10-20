import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import AuthReducers from './AuthReducer'
import DonationReducers from './DonationReducer'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    auth: AuthReducers,
    donation: DonationReducers
});

export default RootReducer;