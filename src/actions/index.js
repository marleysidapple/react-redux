//to call an api
// 1. make a route
// 2. create an action for api
// 3. catch the data or response from the action using reducer and produce application state
// 4. the connect the component with the action using (connect)

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
const ROOT_URL = 'http://localhost:8000/api/v1';

export function fetchPosts(){	
	const request  = axios.get(`${ROOT_URL}/posts`);
	return {
		type: FETCH_POSTS,
		payload: request
	};

}


export function fetchPostById(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST_BY_ID,
    payload: request
  };
}


export function deletePost(id) {
  const request = axios.get(`${ROOT_URL}/post/destroy/${id}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}


export function createPost(props){
	const request = axios.post(`${ROOT_URL}/post/store`, props);
	return {
		type: CREATE_POST,
		payload: request
	}
}

export function loginCheck(props){
	const request = axios.post(`${ROOT_URL}/auth/login`, props);
	return {
		type: LOGIN_CHECK,
		payload: request
	}
}


export function loginFailure(){
	
}