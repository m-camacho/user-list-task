import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
        const { selectedUser } = this.state;
        return selectedUser ? (
            <div style={{ padding: '20px' }}>
                <h1>User Detail</h1>
                <Card style={{ textAlign: 'center' }}>
                    <Card.Img variant="top" src={selectedUser.picUrl} width="150"/>
                    <Card.Body>
                        <Card.Title><h3>{ `${selectedUser.firstName} ${selectedUser.lastName}` }</h3></Card.Title>
                        <Card.Text>
                            <div>{selectedUser.email}</div>
                            <div>{selectedUser.phone}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Link to="/randomuser.me">Back to Users list</Link>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state) => ({ userList: state.userList });

export default connect(mapStateToProps)(UserDetail);