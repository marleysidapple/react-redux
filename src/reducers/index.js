import { combineReducers } from 'redux';
import SignupReducer from './reducer_signup';
import PostReducer from './reducer_post';
import LoginReducer from './reducer_login';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
	signup: SignupReducer,
	posts: PostReducer,
	login: LoginReducer,
	form: formReducer,    // <---- Mounted at 'form'

});

export default rootReducer;