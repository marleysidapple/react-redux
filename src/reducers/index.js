import { combineReducers } from 'redux';
import SignupReducer from './reducer_signup';
import PostReducer from './reducer_post';

const rootReducer = combineReducers({
	signup: SignupReducer,
	posts: PostReducer
});

export default rootReducer;