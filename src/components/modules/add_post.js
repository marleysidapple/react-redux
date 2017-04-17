import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/post.css';
import { createPost } from './../../actions/index';


class AddPost extends Component {



	render(){
	const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
	 <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
	    <label>{label}</label>
	    <div>
	      <input {...input} placeholder={label} type={type} className="form-control"/>
	      {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
	    </div>
	  </div>
	)

		const { fields: {title, author, keyword, description }, handleSubmit,  pristine, reset, submitting} = this.props;
		return (
				<div className="post-wrap">
					<form onSubmit={handleSubmit}>
						<Field name="title" type="text" component={renderField} label="Title"/>
						<Field name="author" type="text" component={renderField} label="Author"/>
						<Field name="keyword" type="text" component={renderField} label="Keyword"/>

						<div className="form-group">
							<label>Description</label>
							<textarea className="form-control" {...description}/>
						</div>
						<button className="btn btn-primary btn-sm" disabled={submitting}>Submit</button>
					</form>
				</div>
			);
	}
}


function validate(vals){
	const errors = {};

	if (!vals.title){
		errors.title = 'Title is required';
	}
	if (!vals.keyword){
		errors.keyword = 'Keyword is required';
	}
	if (!vals.author){
		errors.author = 'Author is required';
	}
	return errors;

}

//connect: first argument is mapStatetoProps. second is mapDispatchToProps
//reduxForm: first - formConfig, second - mapStateToProps, third - mapDispatchToProps 
export default reduxForm({
	form: 'AddNewPost',  //donot need to match with the class name
	validate,
	fields: ['title', 'author', 'keyword', 'description'],
	onSubmit: (post) => createPost(post),
})(AddPost);



