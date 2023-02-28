import { fetchAllWatchData , addWatchData11, updateWatchData, removeWatchData} from "../../common/apis/watch.api";
import * as ActionType from "../ActionType"

export const getWatchData = () => (dispatch) => {
    console.log("Watch action (getmedicine)");

    try {
        dispatch(handleLoading());

        setTimeout(() => {
            // fetch('http://localhost:3004/Watch')
            //     .then((response) => response.json())
            //     .then((data) => dispatch({ type: ActionType.WATCH_GET, payload: data }))
            //     .catch((error) => {
            //         // console.log('Error:', error.message)
            //         dispatch(handleWatchErrore(error.message))
            //     })
            fetchAllWatchData()
            .then((response) => dispatch({type : ActionType.WATCH_GET , payload : response.data}))
        }, 2000);

    } catch (error) {

    }
}

export const addWatchData = (data1) => (dispatch) => {
    console.log("Watch action (addmedicine)");

    try {
        // fetch('http://localhost:3004/Watch', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data1),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         dispatch({ type: ActionType.WATCH_ADD, payload: data })
        //         // console.log('Success:', data);
        //     })

        addWatchData11(data1)
        .then((response) => dispatch({type : ActionType.WATCH_ADD , payload : response.data}))
    } catch (errore) {

    }
}

export const putWatch = (data1) => (dispatch) => {
    try {
        // fetch('http://localhost:3004/Watch/' + data1.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data1),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         dispatch({ type: ActionType.WATCH_PUT, payload: data })
        //     })

        updateWatchData(data1)
        .then((response) => dispatch({type : ActionType.WATCH_PUT , payload : response.data}))
        // .then((response) => console.log(response.data))
    } catch (errore) {

    }
}

export const deletWatch = (id) => (dispatch) => {
    console.log(id);
    try {
        // fetch('http://localhost:3004/Watch/' + id, {
        //     method: 'DELETE',
        // })
        //     .then((response) => response.json())
        //     .then(dispatch({ type: ActionType.WATCH_DELETE, payload: id }))
        removeWatchData(id)
        .then(() => dispatch({type : ActionType.WATCH_DELETE , payload : id}))

    } catch (errore) {

    }
}

export const handleLoading = () => (dispatch) => {
    console.log("handleLoading");
    dispatch({
        type: ActionType.WATCH_LOADING,
        payload: true
    })
}

export const handleWatchErrore = (err) => (dispatch) => {
    dispatch({
        type: ActionType.WATCH_ERRORE,
        payload: err
    })
}