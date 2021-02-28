import { Avatar, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';


export const RegisterView = () => {

    const paperStyle = { padding: '30px 20px', width: 310, margin: "0px auto" };

    const headerStyle = { margin: 0 };

    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const marginTop = { marginTop: 5 }

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = (values, props) => {
        
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
            Swal.fire({
                title: 'User registered!',
                text: 'Continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        }, 2000)
    }



    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short!").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid phone number").required("Required"),
        password: Yup.string().min(9, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required")
    })

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h3 style={headerStyle}>Sign up</h3>
                    <Typography
                        variant='caption'
                        gutterBottom
                    >
                        Please fill this form to create an account
                        </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => {
                        return (
                            <Form>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    name="name"
                                    label='Name'
                                    placeholder='Enter your name'
                                    helperText={
                                        <ErrorMessage name="name">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>}
                                >
                                </Field>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label='Email'
                                    name="email"
                                    placeholder='Enter your Email'
                                    style={marginTop}
                                    helperText={
                                        <ErrorMessage name="email">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>}
                                ></Field>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label='Phone number'
                                    name="phoneNumber"
                                    placeholder='Enter your phone number'
                                    style={marginTop}
                                    helperText={
                                        <ErrorMessage name="phoneNumber">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>}
                                ></Field>
                                <FormControl component="fieldset" style={{ marginTop: 20 }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </Field>
                                </FormControl>
                                <FormHelperText>
                                    <ErrorMessage name="gender">
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </FormHelperText>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label='Password'
                                    name="password"
                                    placeholder='Enter your password'
                                    style={marginTop}
                                    type="password"
                                    helperText={
                                        <ErrorMessage name="password">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>}
                                ></Field>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label='Confirm password'
                                    name="confirmPassword"
                                    placeholder='Confirm your password'
                                    style={marginTop}
                                    type="password"
                                    helperText={
                                        <ErrorMessage name="confirmPassword">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>}
                                ></Field>
                                <Button type='submit' disable={props.isSubmitting} variant='contained' color='primary'>
                                    {props.isSubmitting ? "Loading" : "Sign up"}
                                </Button>
                            </Form>
                        )
                    }}

                </Formik>
            </Paper>
        </Grid>
    );

}