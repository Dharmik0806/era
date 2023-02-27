import { Row } from "reactstrap";
import { fetchAllMedicines, postAllMedicines } from "../../common/apis/men.api";
import * as  ActionType from "../ActionType"


export const getMenData = () => (dispatch) => {
    console.log("getMenData");

    try {
        // dispatch(menLoading())
        // setTimeout(() => {
        //     fetch('http://localhost:3004/MenEra')
        //         .then((response) => response.json())
        //         // .then((data) => console.log(data));
        //         .then((data) => dispatch({ type: ActionType.MEN_GET_DATA, payload: data }));
        // }, 2000)
        dispatch(menLoading())

        setTimeout(() => {

            fetchAllMedicines()
                // .then((response) => console.log(response.data))
                .then((response) => dispatch({ type: ActionType.MEN_GET_DATA, payload: response.data }))

        }, 2000)
    } catch (errore) {

    }
}

export const handlePostMenData = (data1) => (dispatch) => {
    console.log(data1);
    try {
        // fetch('http://localhost:3004/MenEra', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data1)
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.MEN_POST_DATA, payload: data }))
        
        postAllMedicines()
            .then((response) => dispatch({ type: ActionType.MEN_POST_DATA, payload: response.data }))
    } catch (errore) {

    }
}

export const handleDeletMenData = (id) => (dispatch) => {
    console.log(id);
    try {
        fetch(`http://localhost:3004/MenEra/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => dispatch({ type: ActionType.MEN_DELETE_DATA, payload: id }))

    } catch (errore) {

    }
}

export const putMenData = (row) => (dispatch) => {
    try {
        fetch('http://localhost:3004/MenEra/' + (row.id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(row)
        })

            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.MEN_PUT_DATA, payload: data }))

    } catch (errore) {

    }
}

export const menLoading = () => (dispatch) => {
    dispatch({
        type: ActionType.MEN_LOADING,
        payload: true
    })
}