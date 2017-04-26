import React, { Component, PropTypes } from 'react';
//import logo from './logo.svg';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { connect } from 'react-redux';
import { loginCheck } from './actions/index';
//import './App.css';

class App extends Component {
  render() {
    const { dispatch, isAuthenticated } = this.props;
    return (
      <div>
        <Header isAuthenticated={isAuthenticated} dispatch={dispatch} />
          <div className="container wrapper-main">
            <div className="starter-template">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

/*
App.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return {authStatus : state.isAuthenticated};
}
*/

//export default connect(null, mapStateToProps)(App);
export default App;
