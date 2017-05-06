import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Logout extends Component {

	constructor(props){
		super(props);
	}

	logOutUser(){
		cookies.remove('_token');
	}

}


export default Logout;