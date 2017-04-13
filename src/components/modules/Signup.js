import React, { Component } from 'react';
import './../../App.css';
import Signupform from './Signup-form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';

class Signup extends Component {

	render(){

		const { userSignupRequest } = this.props; 

		return(
			<div className="panel panel-default registration">
				  <div className="panel-heading">User Registration</div>
				  	<div className="panel-body">
						<Signupform userSignupRequest={userSignupRequest} />
					</div>
			</div>
		);
	}
}

Signup.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}


//export default connect((state) => { return {} }, { userSignupRequest })(Signup);
export default connect(null, { userSignupRequest })(Signup);