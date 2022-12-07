import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import bg from '../../images/bg.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SignupPageFirst from './SignupPageFirst';
import SignupPageSecond from './SignupPageSecond';
import SignupPageThree from './SignupPageThree';
import '../style/FormStyle.css';

const Form = () => {
    const [page, setPage] = useState(0);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: ""
    })

    const pageDisplay = () => {
        if (page === 0) {
            return <SignupPageFirst formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <SignupPageSecond formData={formData} setFormData={setFormData} />
        } else {
            return <SignupPageThree formData={formData} setFormData={setFormData} />
        }
    }

    const handleSignUp = () => {
        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone_number: formData.phone_number,
                email: formData.email,
                password: formData.password,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setMessage("Account created Successfully!!!")
                } else {
                    setMessage("Email is already exist!!! ")
                }
            })
    }

    return (
        <div className='signup_container'>
            <div className='signup_img'>
                <Link to='/' className='logo'>
                    <img src={logo} alt="" />
                </Link>
                <img src={bg} alt="" />
            </div>
            <div className='signup_form'>
               
                    <p className={message ? 'message' : 'message_alt'}>{message}</p>
                <div className='label'>
                    <p>SignUp Form</p>
                </div>
                <div className='input_field'>
                    {pageDisplay()}
                    {
                        (page === 0) && <div className='btn_container'>
                            <button className='next_btn' onClick={() => { setPage(currPage => currPage + 1) }}>Next Step <AiOutlineArrowRight className='arrow' /></button>
                        </div>
                    }
                    {
                        (page === 1) && <div className='btn_container'>
                            <button className='back_btn' onClick={() => { setPage(currPage => currPage - 1) }}>Back</button>
                            <button className='next_btn' onClick={() => { setPage(currPage => currPage + 1) }}>Next Step <AiOutlineArrowRight className='arrow' /></button>
                        </div>
                    }
                    {
                        (page === 2) && <div className='btn_container'>
                            <button className='back_btn' onClick={() => { setPage(currPage => currPage - 1) }}>Back</button>
                            <button className='authenticate_btn' onClick={handleSignUp}>Signup</button>
                        </div>
                    }
                </div>
                <div className='exist_acnt'>
                    <span>Already have an account?</ span>
                    <Link to='/login' className='link_alt'>LOGIN HERE!</Link>
                </div>
            </div>
        </div>
    );
};

export default Form;