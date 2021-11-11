import React from 'react';
import { Link } from 'react-router-dom';

import banner from './../../images/banner.jpg';


const Header = () => {
    return (
        <div>
            

            <div className="d-flex text-center"  style={{background: `url(${banner})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}
 >
           <div className="m-2">

      <h1 className="title text-warning" style={{fontWeight: 'bold',fontSize: '50px'}} > 
           Discover
            <br />
            JDM Toyota 
             </h1>
             <Link to="/exploreVehicles"> <button className="btn p-2 button text-light" style={{ backgroundColor: '#890717', border: '1px solid gray',
  borderRadius: '10px', marginTop: '10px', fontSize: '20px'}}>Explore Vehicles</button> </Link>
      </div>
             </div>
        </div>
    );
};

export default Header;