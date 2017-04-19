import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/post.css';
import { createPost } from './../../actions/index';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';


class AddPost extends Component {

	static contextTypes = {
	  router: React.PropTypes.object
	};

	//  static contextType = {
	// 	router: PropTypes.object
	// };

	onSubmit(){
		console.log('asd');
	}

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

	const renderFieldForTextArea = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
	 <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
	    <label>{label}</label>
	    <div>
	      <textarea {...input} placeholder={label} type={type} className="form-control"/>
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
						<Field name="description" type="text" component={renderFieldForTextArea} label="Description"/>
						
						<button className="btn btn-primary btn-sm"  disabled={pristine || submitting}>Submit</button>&nbsp; &nbsp;
						<Link to='/' className="btn btn-danger btn-sm">Cancel</Link>
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
	if (!vals.description){
		errors.description = 'Description is required';
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
	onSubmitSuccess: () => {
		 console.log('success');
	//	this.context.router.push('/');
	}
})(AddPost);








