import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import UserDetail from '../components/UserDetail';
import UserList from '../components/UserList';

export default class Users extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Route path="/randomuser.me" exact component={UserList} />
        <Route path="/randomuser.me/:id" component={UserDetail}/>
      </div>
    );
  }
}

