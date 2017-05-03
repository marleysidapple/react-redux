import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { connect } from 'react-redux';
import { loginCheck } from './actions/index';
//import './App.css';

class App extends Component {
  render() {
   
    return (
      <div>
        <Header/>
          <div className="container wrapper-main">
            <div className="starter-template">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}


export default App;
