import axios from 'axios';

export const key = "e6dbf9cd22e8e74c5e8ae7fa9d9a38f2ee2f1885";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;