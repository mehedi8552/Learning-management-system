import React from 'react';
import Layout from '../Layout/Layout'
import AboutUs from '../Components/AboutUs';
import Gallary from '../Components/Gallary';
const AboutUsPage = () => {
    return (
        <Layout>
            <AboutUs/>
            <Gallary/>
        </Layout>
    );
};

export default AboutUsPage;