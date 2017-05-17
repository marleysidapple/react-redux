import { AUTH_USER, AUTH_ERROR, FETCH_USER } from './../actions/index'; 


const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false, logUser: null, showLoad: false}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case AUTH_USER:
			// ...state refers to the current state
			//return { ...state, _token: action.payload.data };
			return { ...state, error: '', message: '', authenticated: true, logUser: action.payload, showLoad: true};
		case AUTH_ERROR:
     		 return { ...state, error: action.payload, authenticated: false, showLoad: true };
     	case FETCH_USER:
     		return { ...state, userDetail: action.payload};
		default:
			return state;
	}
}