import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostById, deletePost } from './../../actions/index';
import { Link } from 'react-router';

class Postdetail extends Component {

	
	 static contextTypes = {
	   router:PropTypes.object
	 };


	componentWillMount(){
		this.props.fetchPostById(this.props.match.params.id);
	}

	onDelete(id){
		this.props.deletePost(id).then(() => {
			this.context.router.history.push('/');
		});
	}


	render(){

		const { post } = this.props;		

		if (!post) {
	      return <div>Loading...</div>;
	    }

		return(
				<div className="panel panel-default">
					<div className="panel-heading">
						{post.title} 
					</div>

					<div className="panel-body">
						{post.description} 
						<hr/>
						Author: <i>{post.author}</i>
					</div>
					
					<div className="panel panel-footer">
						<button onClick={this.onDelete.bind(this, post.id)} className="btn btn-primary btn-sm">Delete Post</button>
					</div>
				</div>
			);
	}

}

function mapStateToProps(state){
	return {post: state.posts.post};
}

export default connect(mapStateToProps, { fetchPostById, deletePost })(Postdetail);