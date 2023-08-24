import axios from "axios"

export const api = axios.create({
    responseType: 'json',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    },
});