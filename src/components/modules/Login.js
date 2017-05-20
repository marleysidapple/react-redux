import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { loginCheck } from './../../actions/index';
import { connect } from 'react-redux'; 
import loading from './../../../public/loading.gif';
import './../../index.css';

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

	constructor(props){
		super(props);
	}


	static contextTypes = {
	   router:PropTypes.object
	};

	onSubmit(props){
		this.props.loginCheck(props).then(()=>{
			this.checkForValidity();
		});
	}

	



	checkForValidity(){
		if (this.props.user != undefined || this.props.user != null){
			this.context.router.history.push('/');
		}
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

			<div className="panel panel-default">
				<div className="panel-heading">
					Please Login
				</div>

				<div className="panel-body">
					<div className="login-wrapper">
						{this.props.authStatus ? <div className="loading-wrapper col-sm-2 col-sm-offset-5">
							<img src={loading} className="loading-icon"/> Processing....
						</div> : ''}
						<div className="clearfix"></div>
					{this.renderAlert()}
						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<Field name="email" type="text" component={renderField} label="Email"/>
							<Field name="password" type="password" component={renderField} label="Password"/>
							<button className="btn btn-primary btn-sm" disabled={pristine || submitting}>Login</button>&nbsp; &nbsp;
						</form>
					</div>
				</div>
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
		user: state.login.logUser,
		authStatus:state.login.showLoad
	};
}


export default connect(mapStateToProps, {loginCheck})(reduxForm({
  form:'LoginForm',
  fields: ['email', 'password'],
  validate
})(Login));