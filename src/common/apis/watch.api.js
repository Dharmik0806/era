import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const fetchAllWatchData = () => {
    return getRequest("watch")
}

export const addWatchData11 = (data) => {
    return postRequest("watch" , data)
}

export const updateWatchData = (data) => {
    return putRequest("watch/" , data)
}

export const removeWatchData = (id) => {
    return deleteRequest("watch/" , id)
}