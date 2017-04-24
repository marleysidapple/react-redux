import { LOGIN_CHECK } from './../actions/index'; 


const INITIAL_STATE = {_token: null};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case LOGIN_CHECK:
			// ...state refers to the current state
			return { ...state, _token: action.payload.data };

		default:
			return state;
	}
}