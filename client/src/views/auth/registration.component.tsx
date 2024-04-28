import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { ISignUpForm } from './auth.type';
import { useState } from 'react';
import { AuthService } from '../../services/auth.service';
import CircularProgress from '@mui/material/CircularProgress';

const classes = {
    root: {
        borderRadius: '4px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        padding: 5,
    },
};

const initialValues: ISignUpForm = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    username: '',
};

const validationSchema = object({
    email: string().required(),
    firstName: string().required(),
    lastName: string().required(),
    password: string().required(),
    username: string().required(),
});

export default function Registration() {
    const navigate = useNavigate();
    const { handleChange, values, isValid, dirty } = useFormik<ISignUpForm>({
        initialValues,
        validationSchema,
        onSubmit: () => null,
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = (): void => {
        setIsSubmitting(true);
        AuthService.signUp(values)
            .then(() => navigate('/login'))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <Box sx={classes.root} component="form">
            <Typography sx={{ my: 5 }}>Logo</Typography>
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
            />
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
            />
            <TextField
                sx={{ mb: 3 }}
                fullWidth
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
            />
            <TextField
                sx={{ mb: 3 }}
                fullWidth
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="current-password"
            />
            <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={!isValid || !dirty || isSubmitting}
                endIcon={isSubmitting ? <CircularProgress /> : null}
            >
                Sign Up
            </Button>
            <Divider orientation="horizontal" sx={{ my: 4 }} flexItem />
            <Button fullWidth variant="outlined" onClick={() => navigate('/login')}>
                Already have an account? Sign Up
            </Button>
        </Box>
    );
}
