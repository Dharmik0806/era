import * as ActionType from "../ActionType"
import { handleLoading } from "./watch.action";


export const getMedicine = () => (dispatch) => {
    // console.log("medicine action ***");
    try {
        setTimeout(() => {
            // dispatch(medHandleLoading())

            fetch('http://localhost:3004/MedicineCity')
                .then((response) => response.json())
                // .then((data) => console.log(data));
                .then((data) => dispatch({ type: ActionType.MEDICINE_GET, payload: data }));
        }, 2000)


    } catch (error) {

    }
}

export const addMedicine = (data1) => (dispatch) => {
    console.log(data1);
    console.log("ADD MEDICINE");
    try {
        fetch('http://localhost:3004/MedicineCity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.MEDICINE_ADD, payload: data }))

    } catch (error) {

    }
}

export const putMedicine = (data2) => (dispatch) => {
    // console.log(data2);
    // console.log(data2.id);


    try {

        fetch(`http://localhost:3004/MedicineCity/${data2.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.MEDICINE_UPDATE, payload: data }))

    } catch (error) {

    }
}

export const deletMedicine = (id) => (dispatch) => {
    // console.log("delet medicine");
    // console.log(id);

    // console.log(`http://localhost:3004/MedicineCity/${data3}`);
    // console.log('http://localhost:3004/MedicineCity/'+id);

    try {

        fetch('http://localhost:3004/MedicineCity/' + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(() => dispatch({ type: ActionType.MEDICINE_DELETE, payload: id }))

    } catch (error) {

    }
}

// export const medHandleLoading = () => (dispatch) => {
//     dispatch({
//         type: ActionType.MEDICINE_LOADING,
//         payload: true
//     })
// }