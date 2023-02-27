// DOCTOR => MEN

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
import { getMenData, handleDeletMenData, handlePostMenData, putMenData } from '../../redux/action/men.action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/loding/Loading';


function MenEra(props) {

    const dispatch = useDispatch()
    const MenFinData = useSelector(state => state.men)
    console.log(MenFinData);

    const [open, setOpen] = React.useState(false);
    const [menData, setMenData] = useState([]);
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

        dispatch(getMenData())

    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'img', headerName: 'Image', width: 130 },
        {
            field: "Action", headerName: "Action", width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={() => { setDid(params.row.id); handledClickOpen() }}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="EDIT" onClick={() => handleUpdate(params.row)}>
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    const doctorData = (values) => {

        dispatch(handlePostMenData(values))

    }

    const handleDelet = (did) => {
        // console.log("delet id");

        // let localData = JSON.parse(localStorage.getItem("men"));
        // let dData = localData.filter((l) => l.id !== did);

        // localStorage.setItem("men", JSON.stringify(dData));
        // setMenData(dData);
        // setDid();

        // setdOpen(false);
        console.log(did);
        dispatch(handleDeletMenData(did))
        handledClose()
        // setDid();

    }

    const handleUpdate = (upValue) => {
        console.log(upValue);
        setOpen(true);
        setValues(upValue);
        setEid(upValue);
    }

    const handleUpdateData = (values) => {
        console.log(values);
        console.log("update okok");

        dispatch(putMenData(values))

        // let localData = JSON.parse(localStorage.getItem("men"));
        // console.log(".. local data in update");
        // console.log(localData);

        // let updateDdata = localData.map((s) => {

        //     if (s.id === NupData.id) {
        //         // console.log("s id");
        //         // console.log(s.id);
        //         return NupData;
        //     } else {
        //         return s;
        //     }
        // })

        // localStorage.setItem("men", JSON.stringify(updateDdata))

        // console.log(localData);
        // menData(updateDdata)
        // setEid("");
        // setValues();
        // menObj.resetForm()
    }

    let schema = yup.object().shape({
        name: yup.string().required("Name is Required Feild."),
        price: yup.number().required("price is Required Feild."),
        img: yup.number().required("IMage number is Required.")

    })

    const menObj = useFormik({
        initialValues: {
            name: "",
            price: "",
            img: ""
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
            <h1>Men Component</h1>

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
                MenFinData.isLoder ? <Loading /> : <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={MenFinData.menData}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            }

            {/* +++++++++++++++++ DELET DAILOG BOX +++++++++++++ */}
            <div>
                {/* <Button variant="outlined" onClick={handledClickOpen}>
                    Open alert dialog
                </Button> */}
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
                        <Button onClick={() => handleDelet(did)} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default MenEra;