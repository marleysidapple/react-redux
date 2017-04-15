import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/modules/Home';
import Post from './components/modules/Post';
import Signup from './components/modules/Signup';
import './index.css';
import { BrowserRouter, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const store = applyMiddleware(promise)(createStore);


// const store = createStore(
// 		(state = {}) => state,
// 		applyMiddleware(thunk)
// 	);

ReactDOM.render(
      <Provider store={store(reducers)}>
	      <BrowserRouter>
		    <App>
		    	<Route exact={true} path="/" component={Home} />
		    	<Route path="/home" component={Home}/> 
		    	<Route path="/signup" component={Signup}/> 
		    	<Route path="/post" component={Post}/> 
		    </App>
		  </BrowserRouter>
	  </Provider>,
  document.getElementById('root')
);
