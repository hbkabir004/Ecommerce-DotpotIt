import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <RegistrationForm /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default AuthLayout;