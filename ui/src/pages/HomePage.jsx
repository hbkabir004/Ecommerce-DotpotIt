import React from 'react';
import FeatureList from '../components/HomePage/FeatureList';
import HeroBanner from '../components/HomePage/HeroBanner';
import PromotionSection from '../components/HomePage/Promotion/PromotionSection';
import PromotionBanner from '../components/HomePage/PromotionBanner';

const HomePage = () => {
    return (
        <div className='mx-72'>
            <HeroBanner />
            <PromotionSection />
            <FeatureList />
            <PromotionBanner />
        </div>
    );
};

export default HomePage;