import React, { Component } from 'react';
import Header from './components/headerComponents/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homepage';


import './default.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HomePage />
        <Footer />
       
      </div>
    );
  }
}

export default App;
