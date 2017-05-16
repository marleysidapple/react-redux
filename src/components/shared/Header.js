import React, { Component } from 'react';
import {NavLink, Redirect, Link, Switch,} from 'react-router-dom';
import { loginCheck } from './../../actions/index';
import { connect } from 'react-redux'; 
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {

	logOutUser(){
			localStorage.removeItem('_token');
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
			          <Link to="/" className="navbar-brand">Simple Project</Link>
			        </div>
			        <div id="navbar" className="collapse navbar-collapse">
			          <ul className="nav navbar-nav">
			            <li className="active"><Link to="/home">Home</Link></li>
			            <li><Link to="/signup">Signup</Link></li>
			            <li><Link to="/post">Posts</Link></li>
			            { this.props.tokenCheck == undefined ? <li><Link to="/login">Login</Link></li> : '' }
			            { this.props.tokenCheck ?  <li><a onClick={this.logOutUser.bind(this)}>Logout</a></li> : '' }
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
		tokenCheck: localStorage.getItem('_token')
	};
}

// Header.PropTypes = {
// 	isAuthenticated: PropTypes.bool.isRequired
// }

export default connect(mapStateToProps, { loginCheck })(Header);