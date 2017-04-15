//to call an api
// 1. make a route
// 2. create an action for api
// 3. catch the data or response from the action using reducer and produce application state
// 4. the connect the component with the action using connect

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://localhost:8000/api/v1';

export function fetchPosts(){
	
	const request  = axios.get(`${ROOT_URL}/posts`);

	return {
		type: FETCH_POSTS,
		payload: request
	};

}