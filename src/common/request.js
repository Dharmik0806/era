import axios from 'axios';
import { BASE_URL } from '../utilis/baseURL';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000
})

export const sendRequest = (config) => {
    return axiosInstance.request(config)
}

export const getRequest = (params) => {
    return sendRequest({
        method: "get",
        url: params
    })
}

// ***
export const postRequest = (params) => {
console.log(params);   
    return sendRequest({
        method: "post",
        url: params,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
}
