import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    );
  }
}

export default App;
