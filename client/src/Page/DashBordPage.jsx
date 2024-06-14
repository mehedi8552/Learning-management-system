import React from 'react';
import Layout from '../Layout/Layout';
import Dashbord from '../Components/Dashboard';
import NavBarTo from '../Components/NavBarTo';

const DashBordPage = () => {
    return (
        <Layout>
           <Dashbord/> 
           <NavBarTo/>
        </Layout>
    );
};

export default DashBordPage;