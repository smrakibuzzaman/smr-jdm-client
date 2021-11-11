import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import Reviews from '../Reviews/Reviews';
import Header from '../SharedComponents/Header';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
             <Header/>
             <NewArrivals/>
             <WhyChooseUs/>
             <Reviews/>
        </div>
    );
};

export default Home;