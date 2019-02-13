import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Contact from './Contact';
import Navbar from './Navbar'
import Main from './Main'

class App extends Component {
  render() {
    return (
    
<Router>
<div>
    <Navbar />

    <Route exact path='/' component={Main} />
    <Route path='/contact' component={Contact} />

    
</div>
</Router>
    
    
  
    )

  }
}

export default App;
