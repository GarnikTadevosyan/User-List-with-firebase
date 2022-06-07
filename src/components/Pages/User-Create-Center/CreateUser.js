import React from 'react';
import './CreateUser.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import CountrySelector from "./CountryDatabase/country-selector/CountrySelector";
import PhoneNumberSelector from "./PhoneNumberDataBase/PhoneNumberSelector";

function CreateUser(props) {

    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .required('Name is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        country: yup
            .string('Enter your email'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='create_user_wrapper'>
            <div className='form_wrapper'>
                <div className='form_container'>
                    <div className='header'>
                        <h1>Registration</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            inputProps={{
                                autoComplete: 'off'
                            }}
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="standard"
                            margin="normal"
                        />
                        <TextField
                            inputProps={{
                                autoComplete: 'off'
                            }}
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="standard"
                            margin="normal"
                        />
                        <CountrySelector/>
                        <PhoneNumberSelector/>
                        <TextField
                            inputProps={{
                                autoComplete: 'off'
                            }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="standard"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Confirm password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="standard"
                            margin="normal"
                        />
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;