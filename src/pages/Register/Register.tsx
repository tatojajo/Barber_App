import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Typography, Box } from '@mui/material';

import { RegisterContainer, RegisterForm } from './Register.styled';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  password2: string;
}

const initialValues: RegisterFormData = {
  username: '',
  email: '',
  password: '',
  password2: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

const Register = () => {
  const {
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    errors,
    validateForm,
    submitForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: RegisterFormData) => {
      console.log(values);
    },
  });

  console.log('values', values);
  console.log('errors', errors);

  return (
    <RegisterContainer>
      <Typography variant="h4" color="#000">
        Register
      </Typography>
      <RegisterForm onSubmit={handleSubmit}>
        <Box sx={{ py: 2 }}>
          <TextField
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
        </Box>

        <Box sx={{ py: 2 }}>
          <TextField
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>

        <Box sx={{ py: 2 }}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Box>

        <Box sx={{ py: 2 }}>
          <TextField
            label="Confirm Password"
            name="password2"
            type="password"
            value={values.password2}
            onChange={handleChange}
            error={!!errors.password2}
            helperText={errors.password2}
          />
        </Box>

        <Button variant="contained" color="primary" onClick={submitForm}>
          Register
        </Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
