import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Contact from './Contact';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
    
<Router>
<div>
    <Navbar />

    <Route exact path='/' component={App} />
    <Route path='/contact' component={Contact} />

    
</div>
</Router>
    
    
  
    )

  }
}

export default App;
