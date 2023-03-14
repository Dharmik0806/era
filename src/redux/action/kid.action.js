import { async } from "@firebase/util";
import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore"

import { db } from "../../fireBase/FireBase"
import * as ActionType from "../ActionType"
// file upload
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const getKidData = () => async (dispatch) => {
   try {

      // dispatch(kidLoading())
      // setTimeout(() => {
      //    fetch("http://localhost:3004/kidEra")
      //       .then((response) => response.json())
      //       .then((data) => dispatch({ type: ActionType.KID_GET_DATA, payload: data }))
      //       .catch((error) => dispatch(handleErrore(error.message)))
      // }, 2000)
      // *************************************************************************

      const querySnapshot = await getDocs(collection(db, "kid"));

      let data = [];

      querySnapshot.forEach((doc) => {
         // console.log(`${doc.id} => ${doc.data()}`);
         // console.log(doc.id);
         data.push({
            ...doc.data(),
            id: doc.id
         })
      });

      dispatch({ type: ActionType.KID_GET_DATA, payload: data })
      // console.log(data);
   } catch (errore) {

   }
}

export const postKidData = (data1) => async (dispatch) => {
   try {

      const storage = getStorage();

      let imgId = Math.round(Math.random() * 1000);

      const storageRef = ref(storage, 'kid/' + imgId);

      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, data1.img_pic).then((snapshot) => {
         // console.log('Uploaded a blob or file!');
         getDownloadURL(snapshot.ref)
            // console.log(snapshot.ref)
            .then(async (url) => {
               // Insert url into an <img> tag to "download"
               // console.log(url);

               const docRef = await addDoc(collection(db, "kid"), { ...data1, img_pic: url, fileName: imgId });
               dispatch({ type: ActionType.KID_POST_DATA, payload: { ...data1, id: docRef.id, img_pic: url, fileName: imgId } })
            })
      });
      // fetch('http://localhost:3004/kidEra', {
      //    method: "POST",
      //    headers: {
      //       'Content-Type': 'application/json'
      //    },
      //    body: JSON.stringify(data1)
      // })

      //    .then((response) => response.json())
      //    .then((data) => dispatch({ type: ActionType.KID_POST_DATA, payload: data }))

      // ********************************************************************
      const docRef = await addDoc(collection(db, "kid"), data1);



      // console.log("Document written with ID: ", docRef.id);
      dispatch({ type: ActionType.KID_POST_DATA, payload: { ...data1, id: docRef.id } })

   } catch (errore) {

   }
}

export const putKidData = (data1) => async (dispatch) => {
   try {
      // fetch('http://localhost:3004/kidEra/' + data1.id, {
      //    method: "PUT",
      //    headers: {
      //       'Content-Type': 'application/json'
      //    },
      //    body: JSON.stringify(data1)
      // })
      //    .then((response) => response.json())
      //    .then((data) => dispatch({ type: ActionType.KID_PUT_DATA, payload: data.id }))

      const kidRef = doc(db, "kid", data1.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(kidRef, data1)
      dispatch({ type: ActionType.KID_PUT_DATA, payload: data1 })

   } catch (errore) {

   }
}

export const deletKidData = (data) => async (dispatch) => {
   console.log(data);
   try {

      const storage = getStorage();

      // Create a reference to the file to delete
      const desertRef = ref(storage, "kid/" + data.fileName);
      console.log(desertRef);
      await deleteObject(desertRef).then(async () => {     //delete store
         await deleteDoc(doc(db, "kid", data.id))            //delete firebasestore
            .then(dispatch({ type: ActionType.KID_DELETE_DATA, payload: data.id }))   //delete reducer
      })
      
      // fetch(`http://localhost:3004/kidEra/${id}`, {
      //    method: "DELETE",
      // })

      //    .then((response) => response.json())
      //    .then(() => dispatch({ type: ActionType.KID_DELETE_DATA, payload: id }))

      // *************************************************************

      // await deleteDoc(doc(db, "kid", id))
      //    .then(() => dispatch({ type: ActionType.KID_DELETE_DATA, payload: id }))


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