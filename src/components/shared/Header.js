import React, { Component, PropTypes } from 'react';
import {NavLink, Redirect, Link, Switch} from 'react-router-dom';
import { loginCheck } from './../../actions/index';
import { connect } from 'react-redux'; 

class Header extends Component {


	static contextTypes = {
	   router:PropTypes.object
	};

	logOutUser(){
			//console.log('asd');
			localStorage.removeItem('_token');
			localStorage.removeItem('userdetail');
			this.context.router.history.push('/post');
	}

	render(){
		return (
			 <nav className="navbar navbar-inverse navbar-fixed-top">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <Link to="/" className="navbar-brand">{  this.props.currentUser == null ? 'Simple Project' : JSON.parse(this.props.currentUser).fullname}</Link>
			        </div>
			        <div id="navbar" className="collapse navbar-collapse">
			          <ul className="nav navbar-nav">
			            <li className="active"><Link to="/home">Home</Link></li>
			            <li><Link to="/signup">Signup</Link></li>
			            <li><Link to="/post">Posts</Link></li>
			            { this.props.tokenCheck == undefined ? <li><Link to="/login">Login</Link></li> : '' }
			            { this.props.tokenCheck ?  <li><a onClick={this.logOutUser.bind(this)}>Logout</a></li> : '' }
			          	<li className="pull-right"></li>
			          </ul>
			        </div>
			      </div>
			    </nav>			
		);
	}
}


function mapStateToProps(state){
	return {
		authenticationStatus : state.login.authenticated,
		tokenCheck: localStorage.getItem('_token'),
		currentUser:  localStorage.getItem('userdetail')
	};
}

// Header.PropTypes = {
// 	isAuthenticated: PropTypes.bool.isRequired
// }

export default connect(mapStateToProps, { loginCheck })(Header);