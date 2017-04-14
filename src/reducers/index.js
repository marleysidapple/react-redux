import { combineReducers } from 'redux';
import SignupReducer from './reducer_signup';

const rootReducer = combineReducers({
	signup: SignupReducer
});

export default rootReducer;