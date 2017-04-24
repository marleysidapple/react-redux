import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
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

	render(){
		const { fields: { email, password }, handleSubmit, pristine, reset, submitting} = this.props;
		return(
				<div className="login-wrapper">
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field name="email" type="text" component={renderField} label="Email"/>
						<Field name="password" type="password" component={renderField} label="Password"/>
					</form>
				</div>
			);
	}
}

export default connect(null, {})(reduxForm({
  form:'LoginForm',
  fields: ['email', 'password'],
  //validate
})(Login));