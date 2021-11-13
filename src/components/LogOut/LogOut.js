import React from 'react';
import useAuth from '../../hooks/useAuth';


const LogOut = () => {
    const {logOut} = useAuth();
    return (
        <div className="container">  
             <input
            className="submit-btn btn btn-primary mt-3"
            type="submit"
            onClick={logOut}
            value="Logout"
          />
        </div>
    );
};

export default LogOut;