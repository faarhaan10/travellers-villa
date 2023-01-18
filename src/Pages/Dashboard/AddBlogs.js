import { Box, Button, Paper, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";

const AddBlogs = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container sx={{ width: { md: '20rem', sm: '100%' } }}>
            <Box>
                <Paper>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField label="Blog title" variant="outlined"
                            fullWidth
                            gutterBottom
                            {...register("title", { required: true })}
                        />
                        <TextField label="Short Description" variant="outlined"
                            fullWidth
                            gutterBottom
                            {...register("description", { required: true })}
                        />
                        <TextField label="Category" variant="outlined"
                            fullWidth
                            gutterBottom
                            {...register("category", { required: true })}
                        />
                        <Button type='submit'>Add</Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default AddBlogs;