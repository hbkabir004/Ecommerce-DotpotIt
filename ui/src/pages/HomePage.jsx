import React from 'react';
import ProductGrid from '../components/AllProducts/ProductGrid';
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
            <ProductGrid />
            <br />
            <br />
        </div>

    );
};

export default HomePage;