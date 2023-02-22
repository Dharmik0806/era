import React, { useState } from 'react';
import { FormGroup, Label, Input, h1 } from 'reactstrap'
import * as yup from 'yup'
import { Formik, useFormik, Form } from 'formik';

function Signin(props) {

    const [type, setType] = useState('login');
    const [reset, setReset] = useState(false);

    let schemaObj;
    let init = {};

    if (type === 'signup' && reset === false) {
        schemaObj = {
            fname: yup.string().required('please enter first name'),
            lname: yup.string().required('please enter last name'),
            mono: yup.number().required("please enter mobail number"),
            email: yup.string().email('invalid email').required('please enter email'),
            password: yup.string().required('Please Enter Password'),
            date: yup.date().required('enter date'),
            text: yup.string().required("please enter message"),
        };

        init = {
            fname: '',
            lname: '',
            mono: '',
            email: '',
            password: '',
            date: '',
            text: ''
        }

    } else if (type === 'login' && reset === false) {
        schemaObj = {
            email: yup.string().email('invalid email').required('please enter email'),
            password: yup.string().required('Please Enter Password')
        };

        init = {
            email: '',
            password: '',
        }

    } else if (reset === true) {
        schemaObj = {
            email: yup.string().email('invalid email').required('please enter email')
        };

        init = {
            email: ''
        }
    }

    const loginData = (data) => {
        localStorage.setItem("userData", JSON.stringify(data));
    }

    let schema = yup.object().shape(schemaObj);
    const formikobj = useFormik({
        initialValues: init,
        validationSchema: schema,
        enableReinitialize: true,

        onSubmit: values => {
            console.log(values);
            loginData(values)
        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched } = formikobj
    console.log(errors, touched);

    return (
        <div id='signin'>
            <div className='signup_container container' >
                <Formik values={formikobj}>
                    <Form onSubmit={handleSubmit}>

                        {
                            reset === true ?
                                <h1>Reset Password</h1> :
                                type === 'signup' ?
                                    <h1>Sign up</h1>
                                    :
                                    <h1>Log in </h1>
                        }
                        <br />
                        {/* ______________________________________________________________________________________________________________________ */}

                        {
                            reset === true ? null :
                                type === "signup" ?

                                    <FormGroup className="row">
                                        <FormGroup className="col">
                                            <input
                                                type="text"
                                                id="Fname"
                                                name="fname"
                                                className="form-control"
                                                placeholder="First name"
                                                aria-label="First name"

                                                onBlur={handleBlur}
                                                onChange={e => { setFieldTouched('fname'); handleChange(e) }}
                                            />
                                            {errors.fname !== '' && touched.fname ? <p className='form-error'>{errors.fname}</p> : null}
                                        </FormGroup>

                                        <FormGroup className="col">
                                            <input
                                                type="text"
                                                id="lname"
                                                name="lname"
                                                className="form-control"
                                                placeholder="Last name"
                                                aria-label="Last name"

                                                onBlur={handleBlur}
                                                onChange={e => { setFieldTouched('lname'); handleChange(e) }}
                                            />
                                            {errors.lname !== '' && touched.lname ? <p className='form-error'>{errors.lname}</p> : null}

                                        </FormGroup>
                                    </FormGroup> :
                                    null
                        }

                        {/* ______________________________________________________________________________________________________________________ */}

                        {/* {
                        reset === true ? null :
                            type === 'signup' ?
                                <FormGroup>
                                    <Label for="Fname">
                                        User Name
                                    </Label>
                                    <Input
                                        id="Fname"
                                        name="fname"
                                        placeholder="Enter Full Name"
                                        type="text"

                                        onBlur={handleBlur}
                                        onChange={e => { setFieldTouched('fname'); handleChange(e) }}
                                    />
                                    {errors.fname !== '' && touched.fname ? <p className='form-error'>{errors.fname}</p> : null}
                                </FormGroup>
                                :
                                null
                    } */}

                        {/* {
                        reset === true ? null :
                            type === 'signup' ?
                                <FormGroup>
                                    <Label for="Mono">
                                        User Name
                                    </Label>
                                    <Input
                                        id="Mono"
                                        name="mono"
                                        placeholder="Mo no"
                                        type="mono"

                                        onBlur={handleBlur}
                                        onChange={e => { setFieldTouched('mono'); handleChange(e) }}
                                    />
                                    {errors.mono !== '' && touched.mono ? <p className='form-error'>{errors.mono}</p> : null}

                                </FormGroup> :
                                null
                    } */}

                        <FormGroup>
                            <Label for="useremail">
                                Email
                            </Label>
                            <Input
                                id="useremail"
                                name="email"
                                placeholder="Enter Email"
                                type="email"

                                onBlur={handleBlur}
                                onChange={e => { setFieldTouched('email'); handleChange(e) }}
                            />
                            {errors.email !== '' && touched.email ? <p className='form-error'>{errors.email}</p> : null}

                        </FormGroup>

                        {/* mono */}
                        {
                            reset === true ? null :
                                type === 'signup' ?
                                    <FormGroup>
                                        <Label for="Fname">
                                            Mobail number
                                        </Label>
                                        <Input
                                            id="mono"
                                            name="mono"
                                            placeholder="Enter 10 digit number"
                                            type="mono"

                                            onBlur={handleBlur}
                                            onChange={e => { setFieldTouched('mono'); handleChange(e) }}
                                        />
                                        {errors.mono !== '' && touched.mono ? <p className='form-error'>{errors.mono}</p> : null}
                                    </FormGroup>
                                    :
                                    null
                        }


                        {/*  */}
                        {
                            reset === true ? null :
                                <FormGroup>
                                    <Label for="userPassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="userPassword"
                                        name="password"
                                        placeholder="password"
                                        type="password"

                                        onBlur={handleBlur}
                                        onChange={e => { setFieldTouched('password'); handleChange(e) }}
                                    />
                                    {errors.password !== '' && touched.password ? <p className='form-error'>{errors.password}</p> : null}

                                </FormGroup>

                        }

                        {
                            reset === true ? null :
                                type === 'signup' ?
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Date
                                        </Label>
                                        <Input
                                            id="exampleText"
                                            name="date"
                                            placeholder="D.O.B"
                                            type="date"

                                            onBlur={handleBlur}
                                            onChange={e => { setFieldTouched('date'); handleChange(e) }}
                                        />
                                        {errors.date !== '' && touched.date ? <p className='form-error'>{errors.date}</p> : null}

                                    </FormGroup>
                                    :
                                    null
                        }

                        {
                            reset === true ? null :
                                type === 'signup' ?
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Text Area
                                        </Label>
                                        <Input
                                            id="exampleText"
                                            name="text"
                                            placeholder="Address"
                                            type="textarea"

                                            onBlur={handleBlur}
                                            onChange={e => { setFieldTouched('text'); handleChange(e) }}
                                        />
                                        {errors.text !== '' && touched.text ? <p className='form-error'>{errors.text}</p> : null}

                                    </FormGroup>
                                    :
                                    null
                        }

                        <FormGroup check>
                            <Input
                                id="exampleCheck"
                                name="check"
                                type="checkbox"
                            />
                            <Label check for="exampleCheck">
                                Check me out
                            </Label>
                        </FormGroup>

                        {/* <Input
                        type="submit"
                        value="submit"
                    /> */}

                        <div className='main-border-button signin-btn'>
                            {
                                reset === true ?
                                    <button type="submit" class="btn btn-dark">Submit</button> :
                                    type === "signup" ?
                                        <button type="submit" class="btn btn-dark">SignUp</button> :
                                        <button type="submit" class="btn btn-dark">LogIn</button>
                            }
                        </div>


                        {/* <input type="submit" value="submit" onClick={() => loginData}/> */}

                    </Form>
                </Formik>

                {
                    reset ?
                        <span onClick={() => { setType('login'); setReset(false) }}>Already Have An Account? <a>Login</a></span>
                        :
                        type === 'signup' ?
                            <span onClick={() => { setType('login'); setReset(false) }} >Already Have An Account? <a>Login</a></span>
                            :
                            <>
                                <span onClick={() => { setType('signup'); setReset(false) }} >Create an account?<a>Signup</a></span> <br />
                                <span onClick={() => { setReset(true) }} ><a>Forgot password?</a></span>
                            </>
                }
            </div>
        </div>
    );
}

export default Signin;