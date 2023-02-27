import { getRequest, postRequest } from "../request"


export const fetchAllMedicines = () => {
    return getRequest('MenEra')
}


export const postAllMedicines = () => {
    return postRequest('MenEra')
}