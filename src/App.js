import React, { Component } from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import Homepage from './Components/Homepage';
import NewPunch from './Components/NewPunch';
import EditPunch from './Components/EditPunch';
import titleImage from './images/download.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className="app-header">
          <h1>
            <a href='#/'><img src={titleImage} alt='clockIt'></img></a>
          </h1>
        </header>
        <body className='app-body'>
          <HashRouter>
            <Switch>
              <Route path='/' component={Homepage} exact/>
              <Route path='/newPunch' component={NewPunch} />
              <Route path='/editPunch' component={EditPunch} />
            </Switch>
          </HashRouter>
        </body>
      </div>
    );
  }
}

export default App;
