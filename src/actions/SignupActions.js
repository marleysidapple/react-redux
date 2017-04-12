import axios from 'axios';

export function userSignupRequest(userData){
	return dispatch => {
		axios.post('http://localhost:8000/api/v1/auth/register', userData);
	}
}