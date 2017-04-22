import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from './../../actions/index';
import { Link } from 'react-router';

class Postdetail extends Component {

	componentWillMount(){
		this.props.fetchPostById(this.props.match.params.id);
	}

	render(){

		const { post } = this.props;		

		if (!post) {
	      return <div>Loading...</div>;
	    }

		return(
				<div>
					{post.title} <br/>
					{post.author} <br/>
					{post.description} <br/>
				</div>
			);
	}

}

function mapStateToProps(state){
	return {post: state.posts.post};
}

export default connect(mapStateToProps, { fetchPostById })(Postdetail);