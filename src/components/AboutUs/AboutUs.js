import React from 'react';
import aboutUsBg from './../../images/aboutus-bg.jpg'

const AboutUs = () => {
    return (
        <div  style={{background: `url(${aboutUsBg})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
<div className="container">
<h1 className="text-secondary" style={{fontWeight: 'bold',fontSize: '50px' }} >About Us</h1>
            <p  style={{fontWeight: 'bold',fontSize: '20px', color: '#890717'}}>
We are SMR JDM Vehicles and we import reconditioned and Brand new vehicles from Japan and other countries. We are truly passionate about cars and this is how it all started. The Journey started in 2018, and since then we have helped more than 500 customers to buy their dream car. In the beginning we stared with only one display center in Dhaka, Now we are proud to say that we have all together three display center in three different locations.

<br />

Over the years we have learned how to source best quality cars from around the world. Initially we only imported our cars from Japan. Now we are also importing our cars from different European countries. We hold one of the largest vehicle stock collections in Bangladesh. We want to redefine the way, people buy and pre order a vehicle. We are in a mission to help customers to choose the right and quality vehicle by offering them free consultation, car review, authentic information, wide range of vehicle selection and finally quality vehicles. We know what it takes to make our customer happy and we strive to be the best at customer service in the industry. To offer the industry leading customer service we have introduced “SMR JDM Vehicles Membership Programme”. SMR JDM Vehicles Membership Programme is customer loyalty program designed for car buyers in Bangladesh. The programme offers after sales service, guaranty on vehicle engine and warranty on Hybrid vehicle battery.

<br />

Our vision is to become one of the major players among the reconditioned automobile industry in Bangladesh and we want to offer a complete solution to our customers including consultation, loan support, servicing, spare parts and vehicle resale support.
            </p>
</div>
           
        </div>
    );
};

export default AboutUs;