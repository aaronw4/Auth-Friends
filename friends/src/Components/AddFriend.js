import React, {useState} from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';

const AddFriend = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [id, setID] = useState(props.number)

    let newNumber = (Number(id) + 1).toString()

    const handleName = e => {
        setName(e.target.value)
    };
    const handleAge = e => {
        setAge(e.target.value)
    };
    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/friends', {
                id: {id},
                name: {name},
                age: {age},
                email: {email}
            })
            .then(props.update()
            )
            .catch(err => console.log(err));
        
        setName('');
        setAge('');
        setEmail('');
        setID(newNumber);
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleName}
                    placeholder='Name'
                />
                <input
                    type='text'
                    name='age'
                    value={age}
                    onChange={handleAge}
                    placeholder='Age'
                />
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    placeholder='email'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default AddFriend