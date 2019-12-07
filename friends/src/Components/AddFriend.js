import React, {useState} from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';

const AddFriend = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

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
                name: `${name}`,
                age: `${age}`,
                email: `${email}`
            })
            .then(props.update()
            )
            .catch(err => console.log(err));
        
        setName('');
        setAge('');
        setEmail('');
    };

    return(
        <div className='addForm'>
            <h3 className='title'>Add a Friend</h3>
            <form onSubmit={handleSubmit} className='addCont'>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleName}
                    placeholder='Name'
                    className='input'
                />
                <input
                    type='text'
                    name='age'
                    value={age}
                    onChange={handleAge}
                    placeholder='Age'
                    className='input'
                />
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    placeholder='email'
                    className='input'
                />
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}


export default AddFriend