import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from './Contact';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
<Router>
<div>
    <Navbar />

    <Route exact path='/' component={App} />
    <Route path='/contact' component={Contact} />

    
</div>
</Router>
       
       
      </div>
    )

  }
}

export default App;
