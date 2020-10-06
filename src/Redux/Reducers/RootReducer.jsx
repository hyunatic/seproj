import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import AuthReducers from './AuthReducer'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    auth: AuthReducers
});

export default RootReducer;