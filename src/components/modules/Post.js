import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from './../../actions/index'; 
import {NavLink, Redirect, Link, Switch,} from 'react-router-dom';

class Post extends Component {

	//componentwillmount 
	componentWillMount(){ //calls when react is loading component for the first time
		this.props.fetchPosts();
	}

	render(){
		return(
			<p>This is post list <Link to='/post/new'>Add New Post</Link></p>
		);
	}
}

// function mapDispatchtoProps(dispatch){
// 	return bindActionCreators({fetchPosts}, dispatch);
// }


//export default connect(null, { fetchPosts: fetchPosts})(Post);
export default connect(null, { fetchPosts })(Post);