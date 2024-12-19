import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        // Getting the user id from the route parameters
        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    // Fetch user details by ID when the component is mounted
    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        })
    }

    render() {
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View User Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Name: </label>
                            <div> {this.state.user.name} </div> {/* Display Name */}
                        </div>
                        <div className="row">
                            <label>Address: </label>
                            <div> {this.state.user.address} </div> {/* Display Address */}
                        </div>
                        <div className="row">
                            <label>State: </label>
                            <div> {this.state.user.state} </div> {/* Display State */}
                        </div>
                        <div className="row">
                            <label>District: </label>
                            <div> {this.state.user.district} </div> {/* Display District */}
                        </div>
                        <div className="row">
                            <label>Date of Birth: </label>
                            <div> {this.state.user.dob} </div> {/* Display Date of Birth */}
                        </div>
                        <div className="row">
                            <label>Language: </label>
                            <div> {this.state.user.language} </div> {/* Display Language */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewUserComponent;
