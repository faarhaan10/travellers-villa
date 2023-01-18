import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SingleBlog from './SingleBlog';

const OurBlogs = () => {


    return (
        <>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Explore our latest blogs
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
                    {
                        [...Array(10)].map(item => <SingleBlog
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