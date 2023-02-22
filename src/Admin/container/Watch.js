import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addWatchData, deletWatch, getWatchData, putWatch } from '../../redux/action/watch.action';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Loading from '../component/loding/Loading';
import Errore from '../component/errore/Errore';

function Watch(props) {

    const dispatch = useDispatch()
    const watchData = useSelector(state => state.watch)

    const [did, setDid] = useState();
    const [eid, setEid] = useState();

    // console.log("watch data");
    console.log(watchData);

    //***** Form Dialoge Box**** */
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // ***** action dialog box ****
    const [dopen, setdOpen] = React.useState(false);

    const handledClickOpen = () => {
        setdOpen(true);
    };

    const handledClose = () => {
        setdOpen(false);
    };

    // ***useEffect****
    useEffect(() => {
        dispatch(getWatchData())
    }, [])

    // ****Validaton*******

    let scheme = yup.object().shape({
        name: yup.string().required("Name is required feild."),
        price: yup.string().required("Price is required feild."),
        color: yup.string().required("Color is required feild."),
        qua: yup.string().required("Quantity is required feild.")

    })

    // ****table****
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Watch name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'color', headerName: 'COlor', width: 130 },
        { field: 'qua', headerName: 'Quantity', width: 130 },
        {
            field: 'Action',
            headerName: 'Action',
            renderCell: (params) => {
                return (
                    <>
                        {/* <IconButton aria-label="delete" onClick={() => { hendelDelet(params.row) }}> */}
                        {/* <IconButton aria-label="delete" onClick={() => {handleDClickOpen() , setDid(params.row.id) }}> */}
                        <IconButton
                            aria-label="delete"
                            onClick={() => { setDid(params.row.id); setdOpen(true) }}
                        >
                            <DeleteIcon />
                        </IconButton>

                        <IconButton
                            onClick={() => { handleUpdate(params.row) }}

                            aria-label="delete">
                            <ModeEditIcon />
                        </IconButton>

                    </>
                )
            }
        }
    ];



    // *****handeleWatchData****
    const handeleWatchData = (values) => {
        console.log("handeleWatchData");

        dispatch(addWatchData(values))
        watchObj.resetForm()
        setOpen(false);

    }

    const handleUpdateData = (values) => {
        console.log(values);

        dispatch(putWatch(values))
        watchObj.resetForm()
        setOpen(false);
    }

    const handaleDelete = (did) => {
        console.log(did);

        dispatch(deletWatch(did))
        setOpen(false)
    }

    const watchObj = useFormik({
        initialValues: {
            name: "",
            price: "",
            color: "",
            qua: ""
        },

        validationSchema: scheme,

        onSubmit: values => {
            console.log(values)

            if (eid) {
                handleUpdateData(values)
            } else {
                handeleWatchData(values)
            }
        }
    })

    const { handleBlur, handleChange, handleSubmit, touched, errors, setFieldTouched, values, setValues, setFieldValue } = watchObj;

    const handleUpdate = (values) => {
        console.log("handleupdate");
        setEid(values);
        setOpen(true);
        setValues(values);
    }

    return (
        <div>
            <h1>Watch component</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Listing Watch
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Watch Details</DialogTitle>
                    <Formik values={watchObj}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We
                                    will send updates occasionally.
                                </DialogContentText>
                                <TextField
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onBlur={handleBlur}
                                    onChange={(e) => { setFieldTouched("name"); handleChange(e) }}
                                />
                                {errors.name !== "" && touched.name ? <p>{errors.name}</p> : null}

                                <TextField
                                    id="price"
                                    name="price"
                                    value={values.price}
                                    margin="dense"
                                    label="Price"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onBlur={handleBlur}
                                    onChange={(e) => { setFieldTouched("price"); handleChange(e) }}
                                />
                                {errors.price !== "" && touched.price ? <p>{errors.price}</p> : null}


                                <TextField
                                    id="color"
                                    name="color"
                                    value={values.color}
                                    margin="dense"
                                    label="Color"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onBlur={handleBlur}
                                    onChange={(e) => { setFieldTouched("color"); handleChange(e) }}
                                />
                                {errors.color !== "" && touched.color ? <p>{errors.color}</p> : null}


                                <TextField
                                    id="qua"
                                    name="qua"
                                    value={values.qua}
                                    margin="dense"
                                    label="Quantity"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onBlur={handleBlur}
                                    onChange={(e) => { setFieldTouched("qua"); handleChange(e) }}
                                />
                                {errors.qua !== "" && touched.qua ? <p>{errors.qua}</p> : null}


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Add</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
            {/* **table ** */}
            {
                watchData.isLoding ? <Loading /> :
                watchData.errore ? <Errore errMsg={watchData.errore} /> :

                <div>
                    <DataGrid
                        rows={watchData.watch}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div> 
           }
            {/* action dialog box */}
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
                        <Button onClick={() => { handaleDelete(did) }} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Watch;