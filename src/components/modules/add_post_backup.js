import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/post.css';
import { createPost } from './../../actions/index';
import { Link } from 'react-router-dom';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	  <div>
	    <label>{label}</label>
	    <div className="form-group">
	      <input {...input} placeholder={label} type={type} className="form-control"/>
	      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	    </div>
	  </div>
	);


class AddPost extends Component {

	render(){
		const { fields: {title}, handleSubmit, touched, valid} = this.props;
		return (
				<div className="post-wrap">
					<form onSubmit={handleSubmit}>
						<Field component={renderField} name="title" label="Title" type="text"/>
						<button className="btn btn-primary btn-sm">Submit</button>
						<Link to='/' className="btn btn-danger btn-sm">Cancel</Link>
					</form>
				</div>
			);
	}
}

function validate(formProps) {
  const errors = {};

  if (!formProps.title) {
    errors.firstName = 'Please enter a first name';
  }
  return errors;
}


//connect: first argument is mapStatetoProps. second is mapDispatchToProps
//reduxForm: first - formConfig, second - mapStateToProps, third - mapDispatchToProps 



export default reduxForm({
	form: 'AddNewPost',  //donot need to match with the class name
	validate,
	//fields: ['title', 'author', 'keyword', 'description']
	fields: ['title'],
	onSubmit: (post) => createPost(post),
})(AddPost);
