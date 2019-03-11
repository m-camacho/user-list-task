import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedUser: null };
    }

    componentDidMount() {
        const { userList, match, history } = this.props;
        const found = userList.find(user => user.id == match.params.id);
        if (found) {
            this.setState({ selectedUser: found });
        } else {
            // logic for not found
            history.push('/randomuser.me')
        }
    }

    render() {
        return (
            <div>
                <h1>User Detail</h1> 
                <Link to="/randomuser.me">Back</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ userList: state.userList });

export default connect(mapStateToProps)(UserDetail);