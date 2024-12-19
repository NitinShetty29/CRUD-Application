import axios from 'axios';

// The correct API base URL for your backend
const USER_API_BASE_URL = "http://localhost:64404/api/v1/users";

class UserService {
    // Fetch all users
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    // Delete a user by ID
    deleteUser(id) {
        return axios.delete(`${USER_API_BASE_URL}/${id}`);
    }

    // Create a new user
    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    // Update an existing user
    updateUser(id, user) {
        return axios.put(`${USER_API_BASE_URL}/${id}`, user);
    }

    // Fetch a single user by ID
    getUserById(id) {
        return axios.get(`${USER_API_BASE_URL}/${id}`);
    }
}

export default new UserService();
