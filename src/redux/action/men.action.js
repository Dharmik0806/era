import * as  ActionType from "../ActionType"


export const getMenData = () => (dispatch) => {
    console.log("getMenData");

    try {
        fetch('http://localhost:3004/MenEra')
            .then((response) => response.json())
            // .then((data) => console.log(data));
            .then((data) => dispatch({ type: ActionType.MEN_GET_DATA, payload: data }));
    } catch (errore) {

    }
}

export const handlePostMenData = (data1) => (dispatch) => {
    console.log(data1);
    try {
        fetch('http://localhost:3004/MenEra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
        })
            .then((response) => response.json())
            .then((data) => dispatch({type : ActionType.MEN_POST_DATA, payload : data}))
    } catch (errore) {

    }
}