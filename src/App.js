import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="container wrapper-main">
            <div className="starter-template">
              <h1>Bootstrap starter template</h1>
              <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
