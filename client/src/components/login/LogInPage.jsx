import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'

class LogInPage extends Component {
    state = {
        users: []
    }

    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({ users: res.data })
    }

    componentWillMount = () => {
        this.getAllUsers()
    }

    render() {
        return (
            <div>
                <h1>Log-In</h1>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => {
                    return (
                        <div>
                            <Link key={user._id} to={`/idea/${user._id}`}>{user.userName}</Link>
                        </div>
                    )
                })}
                <SignUpForm />
            </div>
        )
    }
}

export default LogInPage