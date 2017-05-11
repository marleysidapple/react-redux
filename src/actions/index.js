//to call an api
// 1. make a route
// 2. create an action for api
// 3. catch the data or response from the action using reducer and produce application state
// 4. the connect the component with the action using connect

import axios from 'axios';
import Cookies from 'universal-cookie';
import { browserHistory } from 'react-router';  




export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
const ROOT_URL = 'http://localhost:8000/api/v1';

const cookies = new Cookies();


export function errorHandler(dispatch, error, type){
	let errMessage = '';
	if (error.data.error){
		errMessage = error.data.error;
	}
	if (error.status === 401){
		 dispatch({
	      type: type,
	      payload: 'Opps!!! some valid data please'
	    });
	}
	
}



export function fetchPosts(){	
	
	return function(dispatch){
		axios.get(`${ROOT_URL}/posts`).then(response => {
			dispatch({
				type: FETCH_POSTS,
				payload: response
			});
		})
	}

	// const request  = axios.get(`${ROOT_URL}/posts`);
	// return {
	// 	type: FETCH_POSTS,
	// 	payload: request
	// };

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

/*
export function loginCheck(props){
	const request = axios.post(`${ROOT_URL}/auth/login`, props);
	return {
		type: LOGIN_CHECK,
		payload: request
	}
}
*/
export function loginCheck(props){
	return function(dispatch){
		return axios.post(`${ROOT_URL}/auth/login`, props).then(response => {
			cookies.set('_token', response.data.token, {
				path: '/',
				maxAge: 3600
			});
			dispatch({
					type: AUTH_USER, 
					payload: response.data
			});
		})
		.catch((error) => {
			errorHandler(dispatch, error.response, AUTH_ERROR)
		});
	}
}

export function logoutUser(props) {  
  return function(dispatch){
		return axios.post(`${ROOT_URL}/auth/logout`, props).then(response => {
			cookies.remove('_token');
			dispatch({
					type: UNAUTH_USER, 
			});
		});
	}
}


