import React from 'react';
import './CreateUser.css';
import { useNavigate } from "react-router-dom";
//Formik
import { Formik,Form } from "formik";
import * as yup from 'yup';
//MUI
import CountryRegionSelector from "./CountryRegionSelector/CountryRegionSelector";
import MuiPhoneNumber from "material-ui-phone-number";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import './CountryRegionSelector/CountryRegionSelector.css'
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
//Firebase
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
//Redux
import {userActions} from "../../../redux/actions";
import {connect} from "react-redux";


function CreateUser({addUser}) {

    let navigate = useNavigate();

    const initialValues = {
        name:'',
        email: '',
        country:'',
        region:'',
        phoneNumber:'',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .required('Name is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        confirmPassword: yup
            .string('Confirm your password')
            .oneOf([yup.ref('password'), 'Password must much'])
            .required('required')
    });

     const handlerSubmit = function (values) {
           const auth = getAuth();
           const authUser = {...values};
           delete authUser.password;
           delete authUser.confirmPassword;
           const {email,password,phoneNumber,country} = values;
         createUserWithEmailAndPassword(auth, email, password,phoneNumber,country)
             .then((userCredential) => {
                   const userUid = userCredential.user.uid;
                   authUser.id = userUid;
                   addUser(authUser);
                 signInWithEmailAndPassword(auth, email, password)
                     .then((userCredential) => {
                         const user = userCredential.user;
                         navigate("/users-list", { replace: true });
                     })
                     .catch((error) => {
                         const errorCode = error.code;
                         const errorMessage = error.message;
                         console.log('err code',errorCode);
                         console.log('err message',errorMessage);
                         navigate("/");
                     });
             })
             .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 console.log('Create user component',errorCode);
                 console.log('Create user component',errorMessage);
                 navigate("/");
             });

     };

    return (
        <div className='create_user_wrapper'>
            <div className='form_wrapper'>
                <div className='form_container'>
                    <div className='header'>
                        <h1>Registration</h1>
                    </div>
                    <Formik
                            initialValues={initialValues}
                            onSubmit={handlerSubmit}
                            validationSchema={validationSchema}
                    >
                      { formik => {
                          return (
                                  <Form>
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
                                          error={formik.touched.name && Boolean(formik.errors.name)}
                                          helperText={formik.touched.name && formik.errors.name}
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
                                      <div>
                                          <CountryDropdown
                                              value={formik.values.country}
                                              onChange={e => formik.setFieldValue("country", e)}
                                          />{" "}
                                          <RegionDropdown
                                              country={formik.values.country}
                                              value={formik.values.region}
                                              onChange={e => formik.setFieldValue("region", e)}
                                          />
                                      </div>
                                      <MuiPhoneNumber
                                          defaultCountry={"us"}
                                          onChange={e => formik.setFieldValue("phoneNumber", e)}
                                      />
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
                                          className='form_sender'
                                          fullWidth
                                          id="confirm_password"
                                          name="confirmPassword"
                                          label="Confirm password"
                                          type="password"
                                          value={formik.values.confirmPassword}
                                          onChange={formik.handleChange}
                                          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                          variant="standard"
                                          margin="normal"
                                      />
                                      <Button
                                          className='reg_btn'
                                          color="primary"
                                          variant="contained"
                                          fullWidth type="submit"
                                      >
                                          Submit
                                      </Button>
                                      <div className='go_sign_up'>
                                          <Link
                                              href="/">
                                              Sign Up
                                          </Link>
                                      </div>
                                  </Form>)
                            }
                      }
                    </Formik>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
     return { addUser: (user) => dispatch(userActions.addUser(user))}
} ;

export default connect(null,mapDispatchToProps)(CreateUser);