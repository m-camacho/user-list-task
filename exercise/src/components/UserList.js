import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

class UserList extends Component {
    selectUser(user) {
        const { history } = this.props;
        history.push(`/randomuser.me/${user.id}`);
    }

    render() {
        const { userList } = this.props;
        return (
            <div style={{ padding: '20px' }}>
                <h1>User List</h1> 
                <Table responsive>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map(user => (
                                <tr onClick={() => this.selectUser(user)} key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ userList: state.userList });

export default connect(mapStateToProps)(UserList);
