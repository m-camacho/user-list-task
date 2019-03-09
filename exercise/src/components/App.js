import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from '../routes/Landing';
import Home from '../routes/Home';

const App = () => (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
    </div>
  </BrowserRouter>
);

export default App;
