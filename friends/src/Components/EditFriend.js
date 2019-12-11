import React, {useState} from 'react';
import {axiosWithAuth} from '../Utils/axiosWithAuth';

const EditFriend = (props) => {
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [email, setEmail] = useState(props.email);
    const [id, setID] = useState(props.id)

    console.log(name, age, email, id)

    const handleName = e => {
        setName(e.target.value)
    };
    const handleAge = e => {
        setAge(Number(e.target.value))
    };
    const handleEmail = e => {
        setEmail(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .put(`/api/friends/${id}`, {
                name: name,
                age: age,
                email: email
            })
            .then(
                props.update(),
                props.cancelEdit()
            )
            .catch(err => console.log(err));
    };

    return(
        <div className='editFriend'>
            <h3 className='title'>Edit Friend Information</h3>
            <form onSubmit={handleSubmit} className='addCont'>
            <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleName}
                    className='input'
                />
                <input
                    type='text'
                    name='age'
                    value={age}
                    onChange={handleAge}
                    className='input'
                />
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    className='input'
                />
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default EditFriend;