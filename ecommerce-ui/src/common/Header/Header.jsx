import React from 'react';
import MainHeader from './MainHeader';
import Navigation from './Navigation';
import SubHeader from './SubHeader';
import TopBanner from './TopBanner';

const Header = () => {
    return (
        <>
            <TopBanner />
            <SubHeader />
            <MainHeader />
            <Navigation />
        </>
    );
};

export default Header;