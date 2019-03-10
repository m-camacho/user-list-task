import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './Button';
import { login, logout } from '../actions';

const styles = {
  header: {
    height:          48,
    width:           '100%',
    backgroundColor: 'rgb(102,63,180)',
    color:           'white',
    padding:         '6px 10px',
    display:         'flex',
    flexDirection:   'row',
    alignItems:      'center'
  },
  logo: {
    float:  'left',
    margin: 8
  }
};

class TopBar extends Component {
  render() {
    const { currentUser, loggedIn, dispatch } = this.props;
    const firstButtonProps = {};
    const secondButtonProps = {
      style: { backgroundColor: 'red', color: 'white' }
    };
    if (!loggedIn) {
      firstButtonProps.style = { backgroundColor: 'blue', color: 'white' };
      firstButtonProps.children = 'Login';
      firstButtonProps.onClick = () => dispatch(login());

      secondButtonProps.children = 'Signup';  
    } else {
      firstButtonProps.style = { backgroundColor: 'lightgray', color: 'black', width: '38px', borderRadius: '18px' };
      firstButtonProps.children = currentUser.initials;

      secondButtonProps.children = 'Logout';
      secondButtonProps.onClick = () => dispatch(logout());
    }
    return (
      <header style={styles.header}>
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>Modus Create</div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20}}>
          <Button { ...firstButtonProps } />
          <Button { ...secondButtonProps } />>
        </div>
      </header>
    );
  } 
}

export default connect((state) => ({ 
  loggedIn: !!state.currentUser,
  currentUser: state.currentUser 
}))(TopBar);
