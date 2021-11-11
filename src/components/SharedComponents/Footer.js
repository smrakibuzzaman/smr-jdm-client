import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import bg from './../../images/bg.jpg'

const Footer = () => {
    return (
        <div>
             <div className="text-light">
            <Row style={{background: `url(${bg})`}}>
                <Col xs={12} md={6}>
<h1>Contact Us</h1>
<ul className="list-unstyled">
<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg> info@smrjdmvehicles.com</li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
<path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
</svg> +88017100123123</li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> 12/B, Dhaka, Bangladesh</li>
</ul>
                </Col>

                <Col xs={12} md={6}>
<h1>Quick Links</h1>
<ul className="list-unstyled">
<li><NavLink to="/home" className="text-light decoration">Home</NavLink></li>
<li><NavLink to="/aboutUs" className="text-light decoration">About Us</NavLink></li>
<li><NavLink to="/exploreVehicles" className="text-light decoration">Explore Vehicles</NavLink></li>
<li><NavLink to="/dashboard" className="text-light decoration">Dashboard</NavLink></li>
</ul>
                </Col>
            </Row>
        </div>

        <div>
            <h6 className="text-light" style={{background: `url(${bg})`}} >Copyright@2021 SMR JDM CARS</h6>
        </div>
        
        </div>
    );
};

export default Footer;