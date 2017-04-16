import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/post.css';
import { createPost } from './../../actions/index';
import { connect } from 'react-redux';


class AddPost extends Component {


	
	render(){
		  const { fields: {title}, handleSubmit } = this.props;
		return (
				<div className="post-wrap">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Title</label>
							<Field className="form-control" component="input" type="text" name="title" {...title}  />
						</div>
						<button className="btn btn-primary btn-sm">Submit</button>
					</form>
				</div>
			);
	}
}




function validate(values){
	const errors = {};
	if(!values.title){
		errors.title = 'Enter a title';
	}

	return errors;
}




//connect: first argument is mapStatetoProps. second is mapDispatchToProps
//reduxForm: first - formConfig, second - mapStateToProps, third - mapDispatchToProps 



export default reduxForm({
	form: 'AddNewPost',  //donot need to match with the class name
	//fields: ['title', 'author', 'keyword', 'description']
	fields: ['title'],
	onSubmit: (post) => createPost(post)
})(AddPost);




//export default connect(null, {createPost})(reduxForm(formData)(AddPost));