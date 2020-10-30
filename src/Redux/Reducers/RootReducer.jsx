import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import AuthReducers from './AuthReducer'
import DonationReducers from './DonationReducer'
import OrderReducers from './OrderReducer'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    auth: AuthReducers,
    donation: DonationReducers,
    orders: OrderReducers
});

export default RootReducer;