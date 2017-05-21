import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { fetchPostById, updatePost } from './../../actions/index';

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

class Postedit extends Component {


	componentWillMount(){
		this.props.fetchPostById(this.props.match.params.id);
	}

	onSubmit(){
		console.log('asd');
	}


	render(){

		const { fields: {title, author, keyword, description }, handleSubmit, pristine, reset, submitting} = this.props;
		const { post } = this.props;

		if (!post) {
	      return <div>Loading...</div>;
	    }

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="title" type="text" value={post.title} component={renderField} label="Title"/>
					<Field name="author" type="text"  component={renderField} label="Author"/>
					<Field name="keyword" type="text"  component={renderField} label="Keyword"/>
					<Field name="description" type="text"  component={renderFieldForTextArea} label="Description"/>
					<button className="btn btn-primary btn-sm"  disabled={pristine || submitting}>Update</button>&nbsp; &nbsp;
				</form>
			</div>

			);
	}

}

function mapStateToProps(state){
	return {
		post: state.posts.post,
		initialValues: state.posts.post //specially to load initial values in form for edit purpose
	}
}

function validate(){

}


export default connect(mapStateToProps, {fetchPostById})(reduxForm({
  form:'AddNewPost',
  fields: ['title', 'author', 'keyword', 'description'],
  validate
})(Postedit));


//export default connect(mapStateToProps, {fetchPostById})(Postedit);