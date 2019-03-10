import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { login, logout } from '../actions';

class HomeContent extends Component {
  render() {
    const { dispatch, loggedIn } = this.props;
    const props = { children: loggedIn ? 'Logout' : 'Login' };
    props.onClick = () => {
      if (loggedIn) dispatch(logout())
      else dispatch(login())
    };

    return (
      <div>
        <Button {...props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loggedIn: !!state.currentUser });

export default connect(mapStateToProps)(HomeContent);
