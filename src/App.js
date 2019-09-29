import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainSite from './pages/MainSite/MainSite';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <Router>
        <Route path="/" exact component={MainSite} />
        </Router>
      </>
     );
  }
}
 
export default App;
