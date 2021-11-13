import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {handleUpdateUser, handleSubmit, handleRegister, handleEmail, handlePassword,error, toggleLogin, isLogin} = useAuth();

    return (
        <div>
            <div>
                <h2>{isLogin ? "Login" : "Register"}</h2>
                <form onSubmit={handleSubmit}>
                {!isLogin && <input onBlur={handleUpdateUser} type="name" name="" id="" placeholder="Name"/>} <br />                   
<input onBlur={handleEmail} type="email" name="email" id="" placeholder="Email"/>  <br />                 
<input onBlur={handlePassword} type="password" name="password" id="" placeholder="password" /> <br />
<h6 className="text-danger">{error}</h6>
<button onClick={handleRegister} className="btn btn-primary"type="submit">{isLogin ? "Login" : "Register"}</button>
<p> <input onChange={toggleLogin} type="checkbox" name="checkbox" id="" /> Already have an account?
    <br />
    <Link to="/login">Login</Link>
</p>
                </form>

            </div>
          
        </div>
    );
};

export default Register;
