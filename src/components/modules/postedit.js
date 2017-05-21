import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from './../../actions/index';

class Postedit extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchPostById(this.props.match.params.id);
	}


	render(){

		const { post } = this.props;

		if (!post) {
	      return <div>Loading...</div>;
	    }

		return (
			<div>
				{post.author}
				{post.title}
				{post.description}
			</div>

			);
	}

}

function mapStateToProps(state){
	return {
		post: state.posts.post
	}
}



export default connect(mapStateToProps, {fetchPostById})(Postedit);