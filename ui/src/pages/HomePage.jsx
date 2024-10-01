import React from 'react';
import FeatureList from '../components/HomePage/FeatureList';
import HeroBanner from '../components/HomePage/HeroBanner';
import PromotionSection from '../components/HomePage/Promotion/PromotionSection';
import PromotionBanner from '../components/HomePage/PromotionBanner';

const HomePage = () => {
    return (
        <div className='lg:mx-72 mx-2'>
            <HeroBanner />
            <PromotionSection />
            <FeatureList />
            <PromotionBanner />
        </div>
    );
};

export default HomePage;