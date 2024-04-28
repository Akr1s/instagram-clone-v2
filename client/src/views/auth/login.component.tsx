import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { ISignInForm } from './auth.type';
import { AuthService } from '../../services/auth.service';
import { useState } from 'react';
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

const initialValues: ISignInForm = {
    password: '',
    username: '',
};

const validationSchema = object({
    password: string().required(),
    username: string().required(),
});

export default function Login() {
    const navigate = useNavigate();
    const { handleChange, values, isValid, dirty } = useFormik<ISignInForm>({
        initialValues,
        validationSchema,
        onSubmit: () => null,
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = (): void => {
        setIsSubmitting(true);
        AuthService.signIn(values)
            .then(() => navigate('/feed'))
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
                sx={{ mb: 3 }}
                fullWidth
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
            />
            <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={!isValid || !dirty || isSubmitting}
                endIcon={isSubmitting ? <CircularProgress /> : null}
            >
                Sign In
            </Button>
            <Divider orientation="horizontal" sx={{ my: 4 }} flexItem />
            <Button fullWidth variant="outlined" onClick={() => navigate('registration')}>
                Don't have an account? Sign Up
            </Button>
        </Box>
    );
}
