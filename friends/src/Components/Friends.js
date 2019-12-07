import React from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';
import AddFriend from './AddFriend'

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
   // 

    updateFriends = () => {  
        window.location.reload();
    }

    render() {
        return(
            <div>
            <h1 className='title'>Friends List</h1>
                <div className='friends'>
                    {this.state.friends.map(friend => (
                        <div key={friend.id} className='friend' >
                            <div>{friend.name} (age: {friend.age})</div>
                            <div>{friend.email}</div>
                        </div>
                    ))}
                </div>
                <AddFriend update={this.updateFriends} />
            </div>
        )
    }
}

export default Friends