import React from 'react';

import ParallaxBanner from './Content/ParallaxBanner/ParallaxBanner';
import Feature from './Content/Feature/Feature';
import News from './Content/News/News';
import Pricing from './Content/Pricing/Pricing';
import Statistics from './Content/Statistics/Statistics';
import Blog from './Content/Blog/Blog';
import VideoFeature from './Content/VideoFeature/VideoFeature';
import FAQ from './Content/FAQ/FAQ';
import DownLoad from './Content/DownLoad/DownLoad';
import Testimonial from './Content/Testimonial/Testimonial';
import Contact from './Content/Contact/Contact';

const LandingHome = () => {

    return (
        <>
            <ParallaxBanner />
            <Feature />
            <News />
            <Pricing />
            <Statistics />
            <Blog />
            <VideoFeature />
            <FAQ />
            <DownLoad />
            <Testimonial />
            <Contact />
        </>
    );
};

export default LandingHome;