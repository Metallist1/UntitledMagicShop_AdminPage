import axios from 'axios';

export default axios.create({
    baseURL:'https://magicalshop.azurewebsites.net/api/',
    headers: {
        'content-Type': 'application/json',
    },
})