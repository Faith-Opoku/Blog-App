import React, { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Hero from './Components/header/Hero';
import Home from './Containers/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './Containers/ContactUs/';
import Post from './Containers/Post';
// import SignIn from './Components/SignIn';



function App() {

  //  [userSignIn, setUserSignIn] = useState('');

  return (

     
    <div className="App">
    <br></br>
    <br></br>
    {/* {!userSignIn && <SignIn setUserSignIn={setUserSignIn} />} */}
      
    <Router>

    
    <div className="App">
      <Header />
      <Hero />
      



      <Route path="/" exact component={Home} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Post" component={Post} />
     
      


      
    </div>
    
    
    </Router>
    </div>
  );
}

export default App;
