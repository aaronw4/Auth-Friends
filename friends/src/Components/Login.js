import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();

        axios
            .post('https://aw-friends-data.herokuapp.com/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err =>
                console.log(err.message)
            )
    }

    render() {
        return(
            <div>
                <h1 className='title'>Log In Page</h1>
                <form onSubmit={this.login} className='form'>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='User Name'
                        className='input'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                        className='input'
                    />
                    <button className='button'>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;