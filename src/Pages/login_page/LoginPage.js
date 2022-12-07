import React from 'react';
import '../style/FormStyle.css';
import logo from '../../images/logo.png'
import bg from '../../images/bg.png'
import { Link } from 'react-router-dom';
import useToken from '../customHook/useToken';

const LoginPage = () => {
    const [setEmail, setPassword, handleSubmit] = useToken();
    
    return (
        <div className='signup_container'>
            <div className='signup_img'>
                <Link to='/' className='logo'>
                    <img src={logo} alt="" />
                </Link>
                <img src={bg} alt="" />
            </div>
            <div className='signup_form'>
                <div className='label'>
                    <p>Log in Form</p>
                </div>
                <div className='input_field'>
                    <form onSubmit={handleSubmit}>
                        <input className='email_field' type="email" placeholder='Write Email Address' onChange={e => setEmail(e.target.value)} /> <br /> <br /> <br /> <br />
                        <input className='password_field' type="password" placeholder='Write Password' onChange={e => setPassword(e.target.value)} />
                        <span className='password_text'>Your password must be 8 characters</span>
                        <button className='authenticate_btn'>Log In</button>
                    </form>
                </div>
                <div className='exist_acnt'>
                    <span>Don't have an account?</ span>
                    <Link to='/' className='link_alt'>SIGNUP HERE!</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;