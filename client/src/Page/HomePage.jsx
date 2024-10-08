import React from 'react';
import Layout from '../Layout/Layout'
import Slider from '../Components/Slider';
import Achivement from '../Components/Achivement';
import Course from '../Components/Course';
import Whay1Word from '../Components/Whay1Word';
import OurBook from '../Components/OurBook';
// import Context from '../Components/help/context';
import HonarableParson from '../Components/HonarableParson';


const HomePage = () => {
    return (
        <Layout>
           <Slider/> 
           <Achivement/>
           <Course/>
           <Whay1Word/>
           <OurBook/>
           <HonarableParson/>
            {/* <Context/> */}
        </Layout>
    );
};

export default HomePage;