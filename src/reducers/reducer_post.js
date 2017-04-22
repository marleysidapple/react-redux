import { FETCH_POSTS, FETCH_POST_BY_ID } from './../actions/index'; 


const INITIAL_STATE = {all: [] , post: null};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_POSTS:
			// ...state refers to the current state
			return { ...state, all: action.payload.data };

		case FETCH_POST_BY_ID:
			return { ...state, post: action.payload.data }
		default:
			return state;
	}
}