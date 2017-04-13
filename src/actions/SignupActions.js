//reducers handles the action type
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api/v1';

export function userSignupRequest(userData){
	return dispatch => {
		axios.post(ROOT_URL + '/auth/register', userData);
	}
}