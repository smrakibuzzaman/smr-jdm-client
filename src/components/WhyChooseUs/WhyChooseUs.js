import React from 'react';
import whyBg from './../../images/aboutus-bg.jpg'

const WhyChooseUs = () => {
    return (
        <div className="my-3" >

            <div style={{background: `url(${whyBg})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <h1 style={{ color: '#890717'}} className="fw-bold">Why Choose Us</h1>
<div className='container pt-2'>
<p style={{fontWeight: 'bold',fontSize: '20px'}}>
We believe business is not just for profit but for piety.
The Prophet Muhammad (PBUH) said:
“The truthful trustworthy businessman will be in the company of Prophet’s saints and martyrs on the day of Judgement.
Our core business is importing JDM vehicles from Japan and distribution through our sales network in Bangladesh.
We are also incorporated with SAIC which is China’s Largest automobile manufacturer.
We are looking forward to serve you with a wide range of choices to fulfill your taste of automobile and provide you with the latest additions in the automobile world.
</p>
</div>
            </div>
 
        </div>
    );
};

export default WhyChooseUs;