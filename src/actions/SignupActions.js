//reducers handles the action type
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api/v1';

export function userSignupRequest(userData){
	const url  = `${ROOT_URL}/auth/register`;
	const request = axios.post(url, userData);

	// return dispatch => {
	// 	axios.post(url, userData);
	// }
	return {
		type: 'SAVE_USER',
		payload: request
	}

}