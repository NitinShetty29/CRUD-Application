import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            address: '',
            state: '',
            district: '',
            dob: '',
            language: '',
            errorMessage: '',
        };

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return;
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    name: user.name,
                    address: user.address,
                    state: user.state,
                    district: user.district,
                    dob: user.dob,
                    language: user.language,
                });
            });
        }
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();

        let user = {
            name: this.state.name,
            address: this.state.address,
            state: this.state.state,
            district: this.state.district,
            dob: this.state.dob,
            language: this.state.language,
        };

        if (this.state.id === '_add') {
            UserService.createUser(user).then(
                (res) => {
                    this.props.history.push('/users');
                },
                (err) => this.setState({ errorMessage: err.message })
            );
        } else {
            UserService.updateUser(user, this.state.id).then(
                (res) => {
                    this.props.history.push('/users');
                },
                (err) => this.setState({ errorMessage: err.message })
            );
        }
    };

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    };

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    };

    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    };

    changeDistrictHandler = (event) => {
        this.setState({ district: event.target.value });
    };

    changeDobHandler = (event) => {
        const selectedDate = event.target.value;
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        if (selectedDate > currentDate) {
            alert("Future dates are not allowed!");
        } else {
            this.setState({ dob: selectedDate });
        }
    };

    changeLanguageHandler = (event) => {
        this.setState({ language: event.target.value });
    };

    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add User</h3>;
        } else {
            return <h3 className="text-center">Update User</h3>;
        }
    }

    render() {
        // List of all Indian states
        const statesOfIndia = [
            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
            "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
            "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
            "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
            "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
            "Uttar Pradesh", "Uttarakhand", "West Bengal",
            "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
            "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
        ];

        // List of all districts in Karnataka
        const districtsOfKarnataka = [
            "Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary",
            "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga",
            "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga",
            "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal",
            "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga",
            "Tumkur", "Udupi", "Uttara Kannada", "Vijayanagara", "Yadgir"
        ];

        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.changeNameHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input
                                            placeholder="Address"
                                            name="address"
                                            className="form-control"
                                            value={this.state.address}
                                            onChange={this.changeAddressHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>State: </label>
                                        <select
                                            name="state"
                                            className="form-control"
                                            value={this.state.state}
                                            onChange={this.changeStateHandler}
                                        >
                                            <option value="">Select State</option>
                                            {statesOfIndia.map((state) => (
                                                <option key={state} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>District: </label>
                                        <select
                                            name="district"
                                            className="form-control"
                                            value={this.state.district}
                                            onChange={this.changeDistrictHandler}
                                        >
                                            <option value="">Select District</option>
                                            {districtsOfKarnataka.map((district) => (
                                                <option key={district} value={district}>
                                                    {district}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth: </label>
                                        <input
                                            type="date"
                                            name="dob"
                                            className="form-control"
                                            value={this.state.dob}
                                            max={new Date().toISOString().split('T')[0]} // Restrict to today or earlier
                                            onChange={this.changeDobHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Language: </label>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="language"
                                                    value="Kannada"
                                                    onChange={this.changeLanguageHandler}
                                                    checked={this.state.language === 'Kannada'}
                                                />
                                                Kannada
                                            </label>
                                            <label style={{ marginLeft: '10px' }}>
                                                <input
                                                    type="radio"
                                                    name="language"
                                                    value="Hindi"
                                                    onChange={this.changeLanguageHandler}
                                                    checked={this.state.language === 'Hindi'}
                                                />
                                                Hindi
                                            </label>
                                            <label style={{ marginLeft: '10px' }}>
                                                <input
                                                    type="radio"
                                                    name="language"
                                                    value="English"
                                                    onChange={this.changeLanguageHandler}
                                                    checked={this.state.language === 'English'}
                                                />
                                                English
                                            </label>
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateUser}>
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Cancel
                                    </button>

                                    {this.state.errorMessage && (
                                        <h5 className="alert alert-danger">{this.state.errorMessage}</h5>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;
