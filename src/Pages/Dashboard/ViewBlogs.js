import { Box } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Contex/AuthProvider';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




const ViewBlogs = () => {
    const { url, user } = useContext(MyContext);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        if (user.email) {
            axios.get(`${url}/blogs/email?email=${user.email}`)
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        setBlogs(res.data.result);
                    }
                    else {
                        console.log(res.data.message);
                    }
                })
        }
    }, [url, user.email]);





    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell align="">Email</StyledTableCell>
                            <StyledTableCell align="">date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {blogs.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.title}
                                </StyledTableCell>
                                <StyledTableCell align="">{row.authorEmail}</StyledTableCell>
                                <StyledTableCell align="">{row.date}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ViewBlogs;