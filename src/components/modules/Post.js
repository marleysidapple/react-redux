import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from './../../actions/index'; 
import {Link} from 'react-router-dom';
import './css/post.css';

class Post extends Component {

	//componentwillmount 
	componentWillMount(){ //calls when react is loading component for the first time
		this.props.fetchPosts();
	}

	renderPosts() {
			return this.props.posts.map((post) => {
				return (
						<div className="panel panel-default" key={post.id}>
							<div className="panel-body">
								<Link to={'/post/detail/'+post.id}>{post.title}</Link>
								<div className="pull-right"><i>{post.author}</i></div>
							</div>
						</div>
				);
			});
	 }

	render(){
		return(
			<div className="post-wrapper">
				<span><Link to='/post/new' className='pull-right btn btn-primary btn-sm'>Add New Post</Link></span>
				<div className="clearfix"></div>
				<hr/>
				<div className="single-post-wrapper">	
					{this.renderPosts()}
				</div>
			</div>
		);
	}
}

// function mapDispatchtoProps(dispatch){
// 	return bindActionCreators({fetchPosts}, dispatch);
// }

function mapStateToProps(state){
	return { posts : state.posts.all};
}


//export default connect(null, { fetchPosts: fetchPosts})(Post);
export default connect(mapStateToProps, { fetchPosts })(Post);