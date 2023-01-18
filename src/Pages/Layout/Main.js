import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar';

const Main = () => {
    return (
        <>
            {/* <NavigationBar /> */}
            <Outlet />
        </>
    );
};

export default Main;