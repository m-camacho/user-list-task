import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from '../routes/Landing';
import Home from '../routes/Home';
import Users from '../routes/Users';

const App = () => (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/randomuser.me" component={Users}/>
    </div>
  </BrowserRouter>
);

export default App;
