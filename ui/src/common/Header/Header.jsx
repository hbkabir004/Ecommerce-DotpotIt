import React from 'react';
import MainHeader from './MainHeader';
import Navigation from './Navigation';
import Notification from './Notification';
import SubHeader from './SubHeader';

const Header = () => {
    return (
        <>
            <Notification />
            <SubHeader />
            <MainHeader />
            <Navigation />
        </>
    );
};

export default Header;