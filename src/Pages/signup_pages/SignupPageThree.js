import React from 'react';
import '../style/FormStyle.css';

const SignupPageThree = ({ formData, setFormData }) => {
    return (
        <form>
            <input className='password_field' type="password" placeholder='Write Password' value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} /> <br />
            <span className='password_text'>Your password must be 8 characters</span>
        </form>
    );
};

export default SignupPageThree;