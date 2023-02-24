import * as ActionType from '../ActionType'

export const getWomenData = () => (dispatch) => {
    try {

        dispatch(womenLoding())
        setTimeout(() => {
            fetch('http://localhost:3004/WomenEra')
                .then((response) => response.json())
                .then((data) => dispatch({ type: ActionType.WOMEN_GET_DATA, payload: data }))
        }, 2000)
    } catch (errore) {

    }
}

export const postWomenData = (data1) => (dispatch) => {
    fetch('http://localhost:3004/WomenEra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data1)
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionType.WOMEN_POST_DATA, payload: data }))
}

export const putWomenData = (data1) => (dispatch) => {
    console.log("action");
    fetch('http://localhost:3004/WomenEra/' + (data1.id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionType.WOMEN_PUT_DATA, payload: data }))
}

export const deleteWomenData = (did) => (dispatch) => {
    console.log(`http://localhost:3004/WomenEra/${did}`);
    console.log(did);
    fetch(`http://localhost:3004/WomenEra/${did}`, {
        method: 'DELETE'
    })

        .then((response) => response.json())
        .then(() => dispatch({ type: ActionType.WOMEN_DELETE_DATA, payload: did }))
}

export const womenLoding = () => (dispatch) => {
    dispatch({
        type: ActionType.WOMEN_LOADING,
        payload: true
    })
}