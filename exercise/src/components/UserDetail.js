import React, { Component } from 'react';

export default class UserDetail extends Component {
  render() {
    console.log(this.props.match);
    return (
        <div>
            User Detail
        </div>
    );
  }
}

