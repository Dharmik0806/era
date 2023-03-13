// => KID

import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deletKidData, getKidData, postKidData, putKidData } from '../../redux/action/kid.action';
import Loading from '../component/loding/Loading';
import Errore from '../component/errore/Errore';


function KidEra(props) {

    const dispatch = useDispatch()
    const kidFinData = useSelector(state => state.kid)
    console.log(kidFinData);
    const [open, setOpen] = React.useState(false);
    const [kidData, setKidData] = useState([]);
    const [did, setDid] = useState("");
    const [eid, setEid] = useState("");

    //    Delet Dialog Box
    const [dopen, setdOpen] = React.useState(false);

    const handledClickOpen = () => {
        setdOpen(true);
    };

    const handledClose = () => {
        setdOpen(false);
    };
    // *******************


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        // let localData = JSON.parse(localStorage.getItem("kid"));

        // if (localData !== null) {
        //     setKidData(localData);
        // }

        dispatch(getKidData())

    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },

        { field: 'img', headerName: 'img', width: 130 },
        {
            field: "Action", headerName: "Action", width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={() => { setDid(params.row.id); handledClickOpen() }}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleUpdate(params.row)}>
                            <EditIcon />
                        </IconButton>
                       { console.log(params.row.img_pic)}
                        <img src={params.row.img_pic} width={100} alt="asd" />
                    </>
                )
            }
        }
    ];

    const doctorData = (values) => {
        // let localData = JSON.parse(localStorage.getItem("kid"));
        // console.log(localData);

        // let did = Math.round(Math.random() * 1000);
        // let sDid = { ...values, id: did }

        // if (localData !== null) {
        //     localData.push(sDid)
        //     localStorage.setItem("kid", JSON.stringify(localData));
        //     setKidData(localData)
        // } else {
        //     setKidData([sDid])
        //     localStorage.setItem("kid", JSON.stringify([sDid]));
        // }
        // console.log(kidData);
        // menObj.resetForm()

        dispatch(postKidData(values))

    }

    const handleDelet = () => {
        // console.log("delet id");

        // let localData = JSON.parse(localStorage.getItem("kid"));
        // let dData = localData.filter((l) => l.id !== did);

        // localStorage.setItem("kid", JSON.stringify(dData));
        // setKidData(dData);
        // setDid();

        // setdOpen(false);

        dispatch(deletKidData(did))
        setdOpen(false);

    }

    const handleUpdate = (upValue) => {
        console.log(upValue);
        setOpen(true);
        setValues(upValue);
        setEid(upValue);
    }

    const handleUpdateData = (NupData) => {
        //     console.log(NupData);
        //     console.log("update okok");

        //     let localData = JSON.parse(localStorage.getItem("kid"));
        //     console.log(".. local data in update");
        //     console.log(localData);

        //    let updateDdata = localData.map((s) => {

        //         if(s.id === NupData.id) {
        //             // console.log("s id");
        //             // console.log(s.id);
        //             return NupData;
        //         }else{
        //             return s;
        //         }
        //     })

        // localStorage.setItem("kid", JSON.stringify(updateDdata))

        // // console.log(localData);
        // kidData(updateDdata)
        // setEid("");
        // setValues();
        // menObj.resetForm()

        dispatch(putKidData(NupData))
    }

    let schema = yup.object().shape({
        name: yup.string().required("Name is Required Feild."),
        price: yup.number().required("price is Required Feild."),
        img: yup.number().required("Image no is Required Feild."),
        img_pic: yup.mixed().required("please upload file")

    })

    const menObj = useFormik({
        initialValues: {
            name: "",
            price: "",
            img: "",
            img_pic: null
        },

        validationSchema: schema,
        onSubmit: values => {

            console.log(values);
            if (eid) {
                handleUpdateData(values)
            } else {
                doctorData(values);
            }
            // doctorData(values);
            setOpen(false);
            menObj.resetForm()

        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched, values, setFieldTouched, setValues, setFieldValue } = menObj;

    return (
        <div>
            <h1>KId Component</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Upload Catlog
                </Button>
                <Dialog open={open} onClose={handleClose}>

                    <Formik values={menObj}>
                        <Form onSubmit={handleSubmit}>

                            <DialogTitle>MEN</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Enter Product Details.
                                </DialogContentText>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"

                                    onBlur={handleBlur}
                                    onChange={e => { setFieldTouched('name'); handleChange(e) }}
                                />
                                {errors.name !== "" && touched.name ? <p>{errors.name}</p> : null}

                                <TextField
                                    margin="dense"
                                    id="price"
                                    name="price"
                                    value={values.price}
                                    label="price"
                                    type="number"
                                    fullWidth
                                    variant="standard"

                                    onBlur={handleBlur}
                                    onChange={e => { setFieldTouched("price"); handleChange(e) }}
                                />
                                {errors.price !== "" && touched.price ? <p>{errors.price}</p> : null}

                                <TextField
                                    margin="dense"
                                    id="img"
                                    name="img"
                                    value={values.img}
                                    label="Image No"
                                    type="number"
                                    fullWidth
                                    variant="standard"

                                    onBlur={handleBlur}
                                    onChange={e => { setFieldTouched('img'); handleChange(e) }}
                                />
                                {errors.img !== "" && touched.img ? <p>{errors.img}</p> : null}

                                <TextField
                                    type="file"
                                    name="img_pic"
                                    id="img_pic"
                                    // onChange={e => {(e) => 

                                    // }}

                                    onChange={(e) =>
                                        setFieldValue("img_pic", e.target.files[0])
                                    }
                                    onBlur={handleBlur}
                                />
                                {errors.img_pic !== "" && touched.img_pic ? <p>{errors.img_pic}</p> : null}

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>

                                {
                                    (eid) ? <Button type='submit'>Update...</Button> :
                                        <Button type='submit'>Submit</Button>
                                }

                            </DialogActions>

                        </Form>
                    </Formik>

                </Dialog>
            </div>
            {/* ++++++++++++++++++ TABLE GRID ++++++++++++++++ */}

            {
                kidFinData.isLoder ? <Loading /> : kidFinData.error ? <Errore errMsg={kidFinData.error} /> :
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={kidFinData.kid}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>

            }


            {/* +++++++++++++++++ DELET DAILOG BOX +++++++++++++ */}
            <div>

                <Dialog
                    open={dopen}
                    onClose={handledClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handledClose}>Disagree</Button>
                        <Button onClick={() => handleDelet()} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default KidEra;