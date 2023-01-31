import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Contex/AuthProvider';
import SingleBlog from './SingleBlog';

const OurBlogs = () => {
    const { url } = useContext(MyContext);
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        axios.get(`${url}/blogs`)
            .then(res => {
                if (res.data.success) {
                    alert('Success');
                    setBlogs(res.data.result);
                }
                else {
                    alert(res.data.message);
                }
            })
    }, [url])


    return (
        <>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Explore our latest blogs
                </Typography>
                <Grid container rowSpacing={2} columnSpacing={1} sx={{
                    justifyContent: 'center',
                }}
                >
                    {
                        blogs.map(item => <SingleBlog
                            key={item}
                            blog={item}
                        />)
                    }


                </Grid>
            </Container>
        </>
    );
};

export default OurBlogs;