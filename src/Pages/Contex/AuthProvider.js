import axios from 'axios';
import React, { createContext } from 'react';

export const MyContext = createContext();

const AuthProvider = ({ children }) => {


    const user = {
        displayName: 'Farhan ELias',
        email: 'faarhaan10@gmail.com',
        photoURL: 'https://i.pinimg.com/originals/8d/'
    }
    const url = 'http://localhost:6006';
    const data = {
        user,
        url
    }


    // const makeRequest = (requestType, route, data) => {

    //     axios({
    //         method: requestType,
    //         url: `${url}/${route}`,
    //         data: data || {}
    //     })
    //         .then(res => {
    //             if (res.data.success) {

    //             }
    //             else {

    //             }
    //         })
    // }

    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    );
};
export default AuthProvider;
