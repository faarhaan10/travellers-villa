import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Reg = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <Box sx={{
                width: { md: 345, xs: 1 },
                mx: { md: 0, xs: 2 },

            }}>
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ backgroundColor: '#ddd', px: 3, py: 5, borderRadius: 2, }}
                >
                    <Typography variant="h5" gutterBottom>
                        Signup
                    </Typography>
                    <Stack spacing={2} direction="column">
                        <TextField
                            label="Full Name"
                            id="outlined-size-small"
                            type='text'
                            size="small"
                            {...register("name", { required: true })}
                        />
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            type='email'
                            size="small"
                            {...register("email", { required: true })}
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            type='password'
                            size="small"
                            {...register("password", { required: true })}
                        />
                        <Typography variant="caption" display="block" gutterBottom>
                            Already have an account?
                            <Link to='/login' >
                                Signin
                            </Link>
                        </Typography>
                        <Button type='submit' variant="contained">Submit</Button>
                    </Stack>
                </Box>

            </Box>

        </Box>
    );
};

export default Reg;