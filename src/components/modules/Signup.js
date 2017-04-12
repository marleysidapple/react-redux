import React, { Component } from 'react';
import './../../App.css';
import Signupform from './Signup-form';
import axios from 'axios';

class Signup extends Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	    	fullname: '', 
	    	email: '',
	    	address: '',
	    	mobile: '', 
	    	password: '',
	    	confirm_password: '' 
		};
	  }

	base_url='http://localhost:8000/api/v1';

	handleChange(event){
		this.setState({[event.target.name]: event.target.value});
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
	 event.preventDefault();
     axios.post(this.base_url + '/auth/register', {user: this.state});
   }


	render(){
		return(
			<div className="panel panel-default registration">
				  <div className="panel-heading">Register Here</div>
				  	<div className="panel-body">
						<Signupform />
					</div>
			</div>
		);
	}
}


export default Signup;