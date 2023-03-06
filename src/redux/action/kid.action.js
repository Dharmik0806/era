import { addDoc, collection } from "firebase/firestore"
import { db } from "../../fireBase/FireBase"
import * as ActionType from "../ActionType"

export const getKidData = () => (dispatch) => {
   try {

      dispatch(kidLoading())
      setTimeout(() => {
         fetch("http://localhost:3004/kidEra")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.KID_GET_DATA, payload: data }))
            .catch((error) => dispatch(handleErrore(error.message)))
      }, 2000)
   } catch (errore) {

   }
}

export const postKidData = (data1) => async (dispatch) => {
   try {
      // fetch('http://localhost:3004/kidEra', {
      //    method: "POST",
      //    headers: {
      //       'Content-Type': 'application/json'
      //    },
      //    body: JSON.stringify(data1)
      // })

      //    .then((response) => response.json())
      //    .then((data) => dispatch({ type: ActionType.KID_POST_DATA, payload: data }))

      const docRef = await addDoc(collection(db, "kid"), data1);

      console.log("Document written with ID: ", docRef.id);

   } catch (errore) {

   }
}

export const putKidData = (data1) => (dispatch) => {
   try {
      fetch('http://localhost:3004/kidEra/' + data1.id, {
         method: "PUT",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data1)
      })
         .then((response) => response.json())
         .then((data) => dispatch({ type: ActionType.KID_PUT_DATA, payload: data.id }))
   } catch (errore) {

   }
}

export const deletKidData = (id) => (dispatch) => {
   try {
      fetch(`http://localhost:3004/kidEra/${id}`, {
         method: "DELETE",
      })

         .then((response) => response.json())
         .then(() => dispatch({ type: ActionType.KID_DELETE_DATA, payload: id }))
   } catch (errore) {

   }
}

export const kidLoading = () => (dispatch) => {
   dispatch({
      type: ActionType.KID_LOADING_DATA,
      payload: true
   })
}

export const handleErrore = (err) => (dispatch) => {
   console.log(err);
   dispatch({
      type: ActionType.KID_ERRORE_DATA,
      payload: err
   })
}