import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const fetchAllMenData = () => {
    return getRequest("MenEra")
}

export const addMenData = (data) => {
    return postRequest("MenEra", data)
}

export const updateMenData = (row) => {
    console.log(row);
    return putRequest("MenEra/", row)
}

export const removeMenData = (id) => {
    console.log(id);
    return deleteRequest("MenEra/", id)
}