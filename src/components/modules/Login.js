import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { loginCheck } from './../../actions/index';
import { connect } from 'react-redux'; 

const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
	 <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
	    <label>{label}</label>
	    <div>
	      <input {...input} placeholder={label} type={type} className="form-control"/>
	      {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
	    </div>
	  </div>
	)

class Login extends Component {


	static contextTypes = {
	   router:PropTypes.object
	};

	onSubmit(props){
		//this.props.loginCheck(props);
		this.props.loginCheck(props).then((res)=> {
			//
		});
	}

	renderAlert() {
	    if(this.props.errorMessage) {
	      return (
	        <div className="alert alert-danger">
	          <span><strong>Error!</strong> {this.props.errorMessage}</span>
	        </div>
	      );
	    }
	}



	render(){
		const { fields: { email, password }, handleSubmit, pristine, reset, submitting} = this.props;
		return(
				<div className="login-wrapper">
				{this.renderAlert()}
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field name="email" type="text" component={renderField} label="Email"/>
						<Field name="password" type="password" component={renderField} label="Password"/>
						<button className="btn btn-primary btn-sm"  disabled={pristine || submitting}>Login</button>&nbsp; &nbsp;
					</form>
				</div>
			);
	}
}


function validate(vals){
	const errors = {};

	if (!vals.email){
		errors.email = 'email is required';
	}
	if (!vals.password){
		errors.password = 'password is required';
	}
	return errors;

}

function mapStateToProps(state){
	return {
		errorMessage : state.login.error,
	};
}


export default connect(mapStateToProps, {loginCheck})(reduxForm({
  form:'LoginForm',
  fields: ['email', 'password'],
  validate
})(Login));