import { AUTH_USER, AUTH_ERROR } from './../actions/index'; 


const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false, _logUser: ''}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case AUTH_USER:
			// ...state refers to the current state
			//return { ...state, _token: action.payload.data };
			return { ...state, error: '', message: '', authenticated: true, _logUser: action.payload };
		case AUTH_ERROR:
     		 return { ...state, error: action.payload };
		default:
			return state;
	}
}