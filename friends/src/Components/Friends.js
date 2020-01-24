import React from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';

class Friends extends React.Component {
    state = {
        friends: [],
        name: '',
        age: '',
        email: '',
        id: '',
        edit: false,
        count: 1
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res.data);
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
        }        
    }

    updateFriends = () => { 
        this.setState((state) => {
            return {count: state.count + 1}
        });
        console.log(this.state.count)
    };

    removeFriend = id => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(this.updateFriends())
            .catch(err => console.log(err))
    };

    editFriend = (name, age, email, id) => {
        this.setState({name: name});
        this.setState({age: age});
        this.setState({email: email});
        this.setState({id: id});
        this.setState({edit: true})
    }

    cancelEdit = () => {
        this.setState({edit: false})
    }

    render() {
        return(
            <div>
            <h1 className='title'>Friends List</h1>
                <div className='friends'>
                    {this.state.friends.map(friend => (
                        <div key={friend.id} className='friend' >
                            <div className='firstLine'>
                                <p className='name'>{friend.name} (age: {friend.age})</p> 
                                <button onClick={() => this.removeFriend(friend.id)}  className='deleteButton'>X</button>
                            </div>
                            <div className='firstLine'>
                                <p className='name'>{friend.email}</p>
                                <button onClick={() => this.editFriend(friend.name, friend.age, friend.email, friend.id)} className='editButton'>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
                {this.state.edit === true ? 
                    <EditFriend 
                        name={this.state.name}
                        age={this.state.age}
                        email={this.state.email}
                        id={this.state.id}
                        update={this.updateFriends}
                        cancelEdit={this.cancelEdit}
                    /> 
                    : <AddFriend update={this.updateFriends} />} 
            </div>
        )
    }
}

export default Friends