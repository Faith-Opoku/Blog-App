import React from 'react';
import './App.css';
import Header from './Components/header';
import Hero from './Components/header/Hero';
import Home from './Containers/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './Containers/ContactUs/';
import Post from './Containers/Post';




function App() {
  return (

    <Router>

    
    <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Post" component={Post} />
      
      


      
    </div>
    </Router>
  );
}

export default App;
