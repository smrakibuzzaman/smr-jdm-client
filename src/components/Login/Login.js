import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    
    const { handleSubmit, handleLogin, handleEmail, handlePassword, error} = useAuth();


    return (
        <div>
            <div> 
                <h2>Please Login</h2>
<form onSubmit={ handleSubmit}>
<input onBlur={handleEmail} type="email" name="email" id="" placeholder="Email"/>
<br />
<input onBlur={handlePassword} type="password" name="password" id="" placeholder="password" />
<br />
<h6 className="text-danger">{error}</h6>
<button onClick={handleLogin} className="btn btn-primary"type="submit">Login</button>
    </form>   
    <p>New to SMR JDM CARS? <br /> <Link to="/register">Create Account</Link></p>
</div>
        </div>
    );
};

export default Login;