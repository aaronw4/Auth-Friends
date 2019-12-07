import React from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res.data);
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return(
            <div>
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        {friend.name}
                        {friend.age}
                        {friend.email}
                    </div>
                ))}
            </div>
        )
    }
}

export default Friends