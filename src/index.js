import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/modules/Home';
import Signup from './components/modules/Signup';
import './index.css';
import { BrowserRouter, Route, NavLink, Redirect, Switch } from 'react-router-dom';

ReactDOM.render(
      <BrowserRouter>
	    <App>
	    	<Route exact={true} path="/" component={Home} />
	    	<Route path="/home" component={Home}/> 
	    	<Route path="/signup" component={Signup}/> 
	    </App>
	  </BrowserRouter>,
  document.getElementById('root')
);
