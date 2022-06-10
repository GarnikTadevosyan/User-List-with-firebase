import React from 'react';
import './CreateUser.css';
import { useNavigate } from "react-router-dom";
//Formik
import { Formik,Form } from "formik";
import * as yup from 'yup';
//MUI
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import CountryRegionSelector from "./CountryRegionSelector/CountryRegionSelector";
import PhoneNumberSelector from "./PhoneNumberSelector/PhoneNumberSelector";
import Link from '@mui/material/Link';
import MuiTextField from "../../MUI-Styles/MUI-TextField/MUI_TextField";
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
        phone:'',
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
            .required('required'),
        phone: yup
            .string('phone')
    });


     const handlerSubmit = function (values) {
           const auth = getAuth();
           const authUser = {...values};
           delete authUser.password;
           delete authUser.confirmPassword;
           const {email,password} = values;
         createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 console.log('create start',userCredential)
                   const userUid = userCredential.user.uid;
                   authUser.id = userUid;
                   addUser(authUser);
                   console.log('add users success',authUser, auth, email, password)
                 signInWithEmailAndPassword(auth, email, password)
                     .then((userCredential) => {
                         console.log('sigin start',{})
                         const user = userCredential.user;
                         navigate("/users-list", { replace: true });
                         console.log(user);
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

    console.log('Formik',Formik)

     const testChange = (e) => {
              console.log(e.target.value);
     }

    return (
        <div className='create_user_wrapper'>
            <div className='form_wrapper'>
                <div className='form_container'>
                    <div className='header'>

                        <h1>Registration</h1>
                        <MuiTextField/>
                    </div>
                    <Formik
                            initialValues={initialValues}
                            onSubmit={handlerSubmit}
                            validationSchema={validationSchema}
                            validateOnChange={ (e) => testChange(e)}
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
                                      <CountryRegionSelector/>
                                      <PhoneNumberSelector
                                          id="phone"
                                          name="phone"
                                          phone={formik.values.phone}
                                          onChange={formik.handleChange}
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