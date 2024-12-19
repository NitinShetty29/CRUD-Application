import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    // Delete user function
    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }

    // Navigate to view user details page
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    // Navigate to the edit user page
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    // Fetch users when the component is mounted
    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data });
        });
    }

    // Navigate to the add user form
    addUser() {
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Date of Birth</th>
                                <th>Language</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>   {/* Display Name */}
                                        <td>{user.address}</td> {/* Display Address */}
                                        <td>{user.state}</td>   {/* Display State */}
                                        <td>{user.district}</td> {/* Display District */}
                                        <td>{user.dob}</td>     {/* Display Date of Birth */}
                                        <td>{user.language}</td> {/* Display Language */}
                                        <td>
                                            <button onClick={() => this.editUser(user.id)} className="btn btn-info">Update</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(user.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUserComponent;
