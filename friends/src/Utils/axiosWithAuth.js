import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://aw-friends-data.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}