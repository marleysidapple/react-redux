import React, { Component } from 'react';
import './../../App.css';
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


	handleChange(event){
		this.setState({[event.target.name]: event.target.value});
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
	 event.preventDefault();
     axios.post('http://localhost:8000/api/v1/auth/register', {user: this.state});
   }


	render(){
		return(
			<div className="panel panel-default registration">
			  <div className="panel-heading">Register Here</div>
			  <div className="panel-body">
			  	  
			  	  <form onSubmit = {this.handleSubmit.bind(this)}>
				  	  <div className="form-group">
					    <label>Full Name</label>
					    <input type="text" className="form-control" name="fullname" placeholder="Full Name" value={this.state.fullname} onChange={this.handleChange.bind(this)}/>
					  </div>

					   <div className="form-group">
					    <label>Email</label>
					    <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
					  </div>

					   <div className="form-group">
					    <label>Address</label>
					    <input type="text" className="form-control" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange.bind(this)}/>
					  </div>

					   <div className="form-group">
					    <label>Mobile</label>
					    <input type="text" className="form-control" name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange.bind(this)}/>
					  </div>

					   <div className="form-group">
					    <label>Password</label>
					    <input type="password" className="form-control" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
					  </div>

					   <div className="form-group">
					    <label>Confirm Password</label>
					    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm password" value={this.state.confirm_password} onChange={this.handleChange.bind(this)}/>
					  </div>

				     

					  <button type="submit" className="btn btn-default">Submit</button>
				  </form>
			  </div>
			</div>

		);
	}
}

export default Signup;