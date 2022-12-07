import React from 'react';
import '../style/FormStyle.css';

const SignupPageSecond = ({formData, setFormData}) => {
    return (
        <form>
            <div className='number_input'>
                <input className='number_code' type="text" placeholder='+880' disabled />
                <input className='number_field' type="text" placeholder='1xxxxxxxxx'  value={formData.phone_number} onChange={e => setFormData({...formData, phone_number:e.target.value})}/>
            </div> <br /> <br /> <br />
            <input className='email_field' type="email" placeholder='Write Email Address'  value={formData.email} onChange={e => setFormData({...formData, email:e.target.value})}/>
        </form>
    );
};

export default SignupPageSecond;