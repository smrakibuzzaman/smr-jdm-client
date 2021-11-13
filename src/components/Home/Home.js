import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import Header from '../SharedComponents/Header';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
             <Header/>
             <NewArrivals/>
             <WhyChooseUs/>
             <ReviewDisplay/>
        </div>
    );
};

export default Home;