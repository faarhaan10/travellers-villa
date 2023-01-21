import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const Reg = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box style={{}}>
            <Box fullwidth sx={{

                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ backgroundColor: '#ddd', px: 3, py: 5, width: { md: '20rem', xs: 'auto' }, }}
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
                        <Button type='submit' variant="contained">Login</Button>
                    </Stack>
                </Box>

            </Box>

        </Box>
    );
};

export default Reg;