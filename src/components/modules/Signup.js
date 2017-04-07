import React, { Component } from 'react';
import './../../App.css';

class Signup extends Component {

	 constructor(props) {
	    super(props);
	    this.state = {fullname: '', email: ''};
	  }


	handleChange(event){
		this.setState({fullname: event.target.value});
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
     console.log(this.state.fullname);
     console.log(this.state.email);
     event.preventDefault();
   }


	render(){
		return(
			<div className="panel panel-default registration">
			  <div className="panel-heading">Register Here</div>
			  <div className="panel-body">
			  	  
			  	  <form onSubmit = {this.handleSubmit.bind(this)}>
				  	  <div className="form-group">
					    <label>Full Name</label>
					    <input type="text" className="form-control" placeholder="Full Name" value={this.state.fullname} onChange={this.handleChange.bind(this)}/>
					  </div>

					   <div className="form-group">
					    <label>Email</label>
					    <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)}/>
					  </div>

				     

					  <button type="submit" className="btn btn-default">Submit</button>
				  </form>
			  </div>
			</div>

		);
	}
}

export default Signup;