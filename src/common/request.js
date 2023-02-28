import axios from 'axios';
import { BASE_URL } from '../utilis/baseURL';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});

export const sendRequest = (config) => {
    return axiosInstance.request(config)
}

// *************************Men Methods************************
export const getRequest = (params) => {
    return sendRequest({
        method: "get",
        url: params
    })
}

export const postRequest = (path, data) => {
    console.log(data);
    return sendRequest({
        method: "post",
        url: path,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const putRequest = (path , data) => {
    console.log(data);
    console.log(path+data.id);
    // console.log(BASE_URL+path+data.id);
    return sendRequest({
        method : 'put',
        url : path+data.id,
        data : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })
}

export const deleteRequest = (path,id) => {
    return sendRequest({
        method : "delete",
        url : path+id
    })
}

// ***************************Women Method*******************************